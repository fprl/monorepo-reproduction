import {
  type QwikIntrinsicElements,
  type Signal,
  createContextId,
  useContextProvider,
  useContext,
  component$,
  useSignal,
  Slot,
  useTask$
} from '@builder.io/qwik';

import { LuChevronDown } from '@qwikest/icons/lucide';

const ShowMoreContext = createContextId<{
  isOpen: Signal<boolean>;
  rootRef: Signal<HTMLElement>;
}>("ShowMoreContext");

type ShowMoreProps = QwikIntrinsicElements['div'] & {
  open?: Signal<boolean>;
};

export const ShowMore2 = component$<ShowMoreProps>(({ open, ...props }) => {
  const isOpen = useSignal(open ?? false);
  const rootRef = useSignal<HTMLElement>();

  useTask$(({ track }) => {
    if (!open) return;
    track(open);

    isOpen.value = open.value;
  });

  useContextProvider(ShowMoreContext, { isOpen, rootRef });

  return (
    <div {...props} ref={rootRef}>
      <Slot />
    </div>
  );
});

export const ShowMoreText2 = component$(() => {
  const { isOpen } = useContext(ShowMoreContext);

  if (!isOpen.value) return null;

  return <Slot />;
});

type ShowMoreTriggerProps = {
  showMoreLabel?: string;
  hideLessLabel?: string;
};

export const ShowMoreTrigger2 = component$<ShowMoreTriggerProps>(({ showMoreLabel, hideLessLabel }) => {
  const { isOpen, rootRef } = useContext(ShowMoreContext);

  return (
    <button
      onClick$={() => {
        if (isOpen.value) {
          rootRef.value.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          });
        }

        isOpen.value = !isOpen.value
      }}
      class={['p-0 text-base', isOpen.value && 'transform [&>svg]:rotate-180']}
    >
      <span>
        {isOpen.value ? hideLessLabel : showMoreLabel}
      </span>
      <LuChevronDown class="w-4 h-4 ml-2" />
    </button>
  );
});
