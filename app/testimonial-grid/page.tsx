export default function page() {
  return (
    <div className="bg-gray-400">
      <div className="mx-auto max-w-7xl p-3 gap-10 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 ">
        {/* box 1 */}
        <div className="bg-[#7E22CE] relative p-10 space-y-4 rounded-xl md:col-span-2 ">
          <img
            src="/testimonial-grid/images/bg-pattern-quotation.svg"
            className="absolute md:w-38 w-30  top-0 md:right-1/7 right-2 z-0"
            alt=""
          />
          <div className="flex  items-center space-x-3">
            <img
              src="/testimonial-grid/images/image-daniel.jpg"
              className="rounded-full w-11 border-2 border-white"
              alt=""
            />
            <div className="flex flex-col">
              <p className="text-white text-xs">Daniel Clifford</p>
              <p className="text-xs">Verified Graduate</p>
            </div>
          </div>
          <h1 className="text-white text-lg font-serif relative z-10">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </h1>
          <p className="line-clamp-6 opacity-80 text-base">
            "I was an EMT for many years before I joined the bootcamp. I've been
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and
            found it incredibly fun! I enrolled shortly thereafter. The next 12
            weeks was the best - and most grueling - time of my life. Since
            completing the course, I've successfully switched careers, working
            as a Software Engineer at a VR startup. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ratione vero repudiandae, quasi atque
            officiis eum consectetur odio amet dolorem deleniti repellat
            expedita aut sunt laudantium cum itaque nam voluptatum quod! Quo
            totam sequi omnis deserunt? Sit nam molestiae excepturi,
            perspiciatis labore deleniti eum, eligendi quisquam quod sed nobis
            exercitationem tempora! "
          </p>
        </div>
        {/* box 2 */}
        <div className="bg-[#4B5563] p-10 space-y-4 rounded-xl">
          <div className="flex flex-row items-center space-x-3">
            <img
              src="/testimonial-grid/images/image-jonathan.jpg"
              className="w-10 rounded-full border-2 border-white"
              alt=""
            />
            <div className="flex flex-col">
              <p className="text-white text-xs">Jonathan Harrison</p>
              <p className="text-xs">Verified Graduate</p>
            </div>
          </div>
          <h1 className="text-lg text-white font-serif">
            The team was very supportive and kept me motivated
          </h1>
          <p className="line-clamp-6 opacity-80 text-base">
            "I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I've made in myself. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque ipsam veritatis natus illum
            ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem
            necessitatibus facere nihil deleniti assumenda vel velit neque quia,
            nisi ipsum laudantium impedit eveniet iste. Pariatur, exercitationem
            consequuntur praesentium a est eum velit quos maiores ipsum facere
            tempora! "
          </p>
        </div>
        {/* box 3 */}
        <div className="bg-[#FFFFFF] p-10 space-y-4 rounded-xl md:row-span-2">
          <div className="space-x-3 flex flex-row items-center">
            <img
              src="/testimonial-grid/images/image-kira.jpg"
              alt="kira picture"
              className="w-10 rounded-full border-2 border-[#7E22CE]"
            />
            <div className="flex flex-col">
              <p className="text-black text-xs">Kira Whittle</p>
              <p className="text-xs">Verified Graduate</p>
            </div>
          </div>
          <h1 className="text-black text-lg font-serif">
            Such a life-changing experience. Highly recommended!
          </h1>
          <p className="text-base opacity-80">
            "Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend!"
          </p>
        </div>
        {/* box 4*/}
        <div className="space-y-4 rounded-xl p-10 bg-[#FFFFFF]">
          <div className="flex items-center space-x-3">
            <img
              src="/testimonial-grid/images/image-jeanette.jpg"
              alt=""
              className="w-10 rounded-full border-2 border-[#7E22CE]"
            />
            <div className="flex flex-col">
              <p className="text-black text-xs">Jeanette Harmon</p>
              <p className=" text-xs">Verified Graduate</p>
            </div>
          </div>
          <h1 className="text-lg font-serif text-black">
            An overall wonderful and rewarding experience
          </h1>
          <p className="opacity-80 text-base">
            "Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love."
          </p>
        </div>
        {/* box 5 */}
        <div className="space-y-4 rounded-xl p-10 bg-[#111827] md:col-span-2">
          <div className="flex space-x-3 items-center">
            <img
              src="/testimonial-grid/images/image-patrick.jpg"
              alt="patrick image"
              className="w-10 rounded-full border-2 border-white"
            />
            <div className="flex flex-col">
              <p className="text-sm text-white">Patrick Abrams</p>
              <p className="text-sm">Verified Graduate</p>
            </div>
          </div>
          <h1 className="text-white font-serif text-lg">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </h1>
          <p className="text-base opacity-80">
            "The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people."
          </p>
        </div>
      </div>
    </div>
  );
}
