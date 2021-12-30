const AboutMe = () => {
    return (
        <article className="w-full p-28 items-center">
            <div className="grid grid-cols-3">
                <div className="col-span-2 mr-12">
                    <h2 className="text-rose-500 text-4xl font-light mb-12">About Me</h2>
                    <div className="font-light whitespace-pre-line text-xl leading-8">
                        <p className="mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci
                            blanditiis saepe perspiciatis, molestiae voluptatum, totam placeat quo
                            voluptates repellat nesciunt ex quod architecto necessitatibus unde aut
                            a odio. Quam!
                        </p>
                        <p className="mb-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
                            accusamus reprehenderit atque repellat minima ex excepturi repudiandae,
                            distinctio nulla porro temporibus quasi et laboriosam cupiditate
                            doloribus, consectetur blanditiis? Eaque, quasi!
                        </p>
                    </div>
                </div>
                <div className="w-full h-full max-w-sm">
                    <img
                        className="w-full h-full object-contain"
                        src="https://via.placeholder.com/300"
                        alt=""
                    />
                </div>
            </div>
        </article>
    );
};

export default AboutMe;
