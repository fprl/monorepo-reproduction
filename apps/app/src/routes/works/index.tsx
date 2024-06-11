import { component$, useSignal } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ShowMore2, ShowMoreText2, ShowMoreTrigger2 } from "~/components/show-more-2";

export default component$(() => {
  const counter = useSignal(0);

  const shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const longDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.';

  return (
    <div class="p-8 flex flex-col gap-y-12">
      <a href="/" class="text-red-500">Go to the one that doesn't work</a>
      <p>
        As you can see, if you click on the counter, it does work
      </p>

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
        <ShowMore2 class="space-y-2">
          <div dangerouslySetInnerHTML={shortDescription} />


          <ShowMoreText2>
            <p dangerouslySetInnerHTML={longDescription} />
          </ShowMoreText2>
          <ShowMoreTrigger2 showMoreLabel="Read more" hideLessLabel="Read less" />
        </ShowMore2>
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
