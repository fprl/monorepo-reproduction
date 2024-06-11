import { component$, useSignal } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { isDev } from '@builder.io/qwik/build';

import { ShowMore, ShowMoreText, ShowMoreTrigger } from "@ooakt/ui/show-more";

export default component$(() => {
  const counter = useSignal(0);

  const shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const longDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.';

  return (
    <div class="p-8 flex flex-col gap-y-12">
      <a href="/works" class="text-red-500">Go to the one that works</a>

      <div class="max-w-prose border p-8 border-red-500 space-y-4">
        <p>
          As you can see, if you click on the counter, it doesn't work (but the show more does work)
        </p>
        <p>
          I tracked the error down to the <code>useContextProvider</code> in the show-more component. If I remove that line, the rest of the component where the show more is used works as expected.
        </p>

        {isDev && (
          <p class="p-2 bg-red-600 text-white">
            You are in dev mode, please run <code>npm run build</code> and then <code>npm run serve</code>
          </p>
        )}
      </div>

      <div class="flex items-center gap-x-4">
        <button
          onClick$={() => (counter.value -= 1)}
          class="bg-primary border px-4 py-2 rounded-md text-white"
        >
          Decrement
        </button>
        <p>Counter: {counter}</p>
        <button
          onClick$={() => (counter.value += 1)}
          class="bg-primary border px-4 py-2 rounded-md text-white"
        >
          Increment
        </button>
      </div>

      <div>
        <ShowMore class="space-y-2">
          <div dangerouslySetInnerHTML={shortDescription} />


          <ShowMoreText>
            <p dangerouslySetInnerHTML={longDescription} />
          </ShowMoreText>
          <ShowMoreTrigger showMoreLabel="Read more" hideLessLabel="Read less" />
        </ShowMore>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
