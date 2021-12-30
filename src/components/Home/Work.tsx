const Work = () => {
    const experience = [
        {
            id: 1,
            logo: 'https://cdn.veluga.kr/icons/logo.svg',
            name: '벨루가 브루어리',
            position: 'FrontEnd',
            period: '2021.02~06',
            task: [
                'Django로 구축된 사내 어드민 React/Typescript 기반 리뉴얼 작업',
                '스택 선정, 코드 컨벤션, 이슈 관리, CICD 등 전반적 개발 환경 구축',
            ],
        },
        {
            id: 2,
            logo: 'https://lh3.googleusercontent.com/-cBq5dX2hwQ4/AAAAAAAAAAI/AAAAAAAAAAA/uPlJ6vexcnQ/s44-p-k-no-ns-nd/photo.jpg',
            name: '꿈많은 청년들',
            position: 'FrontEnd',
            period: '2022.01~',
            task: [],
        },
    ];

    return (
        <article
            id="work"
            className="w-full flex flex-col justify-center max-w-screen-md mx-auto lg:p-28 md:p-20 sm:p-10 p-8"
        >
            <h2 className="text-center mb-10">Work</h2>
            {experience.reverse().map((job) => (
                <div key={job.id} className="mt-8">
                    <div className="flex mb-2">
                        <div className="mr-2 flex items-center w-12 justify-center text-center">
                            <img className="w-9/12" src={job.logo} alt={`${job.name} 로고`} />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold">{job.name}</h3>
                            <p className="text-gray-500">
                                {job.position}
                                <span className="ml-2 text-gray-500">{job.period}</span>
                            </p>
                        </div>
                    </div>

                    <div className="p-4 leading-8">
                        {job.task.map((desc) => (
                            <p className="whitespace-pre-wrap">- {desc}</p>
                        ))}
                    </div>
                </div>
            ))}
        </article>
    );
};

export default Work;
