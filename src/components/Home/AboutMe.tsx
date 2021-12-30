const AboutMe = () => {
    return (
        <article id="aboutme" className="w-full lg:p-28 md:p-20 sm:p-10 p-8 ms:p-20 items-center">
            <div className="grid md:grid-cols-3 grid-cols-1">
                <div className="md:col-span-2 md:mr-12 md:mt-0 mt-10">
                    <h2 className="mb-12">About Me</h2>
                    <div className="whitespace-pre-line text-xl leading-8">
                        <p className="mb-5">프론트엔드 개발자 김창회입니다.</p>
                    </div>
                </div>
                <div className="w-full h-full max-w-sm m-auto md:mt-0 mt-4 rounded-md">
                    <img
                        className="w-full h-full object-contain rounded-md"
                        src="https://avatars.githubusercontent.com/u/66462726?v=4"
                        alt="이미지 사진"
                    />
                </div>
            </div>
        </article>
    );
};

export default AboutMe;
