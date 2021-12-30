const Contact = () => {
    return (
        <article
            id="contact"
            className="w-full lg:p-28 md:p-20 sm:p-10 p-8 items-center bg-gray-700"
        >
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="mb-8 md:mb-0 md:mr-4">
                    <h2 className="mb-6">Let's Connect</h2>
                    <p className="text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ex quae
                        totam, tenetur velit distinctio libero praesentium, hic cum repellat
                        blanditiis voluptatem aspernatur dolore corrupti dolorem perferendis et
                        placeat voluptatum.
                    </p>
                </div>

                {/* form */}
                <form className="flex flex-col h-96">
                    <input className="rounded-md py-3 px-4 mb-4" placeholder="name" type="text" />
                    <input className="rounded-md py-3 px-4 mb-6" placeholder="email" type="email" />
                    <textarea className="rounded-md py-3 px-4 h-40" placeholder="message. . ." />
                    <button
                        className="text-rose-400 border-2 border-rose-400 py-1 w-40 mt-8 rounded-md font-bold"
                        type="submit"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </article>
    );
};

export default Contact;
