const AboutMe = () => {
    return (
        <article id="aboutme" className="w-full  lg:p-28 md:p-20 sm:p-10 p-8 ms:p-20 items-center">
            <div className="grid md:grid-cols-3 grid-cols-1">
                <div className="md:col-span-2 md:mr-12 md:mt-0 mt-10">
                    <h2 className="mb-12">About Me</h2>
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
                <div className="w-full h-full max-w-sm m-auto md:mt-0 mt-4">
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
