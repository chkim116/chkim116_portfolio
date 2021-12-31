import { useCallback, useState } from 'react';

const { REACT_APP_DEV_URL, REACT_APP_PROD_URL, NODE_ENV } = process.env;

const Contact = () => {
    const url = NODE_ENV === 'production' ? REACT_APP_PROD_URL : REACT_APP_DEV_URL;
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleFormSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (form['name'] && form['email'] && form['message']) {
                fetch(`${url}/mail` || '', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                    },
                    body: JSON.stringify(form),
                }).catch((err) => console.error(err));
            } else {
                alert('모두 입력해 주세요.');
            }
        },
        [form, url],
    );

    const handleFormChange = useCallback((e) => {
        const { name, value } = e.target;

        setForm((prev) => ({ ...prev, [name]: value }));
    }, []);

    return (
        <article
            id="contact"
            className="w-full lg:p-28 md:p-20 sm:p-10 p-8 items-center bg-gray-700"
        >
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="mb-8 md:mb-0 md:mr-4">
                    <h2 className="mb-6">Let&apos;s Connect</h2>
                </div>

                {/* form */}
                <form
                    className="flex flex-col h-96"
                    onChange={handleFormChange}
                    onSubmit={handleFormSubmit}
                >
                    <input
                        autoComplete="off"
                        className="rounded-md py-3 px-4 mb-4"
                        placeholder="name"
                        name="name"
                        type="text"
                    />
                    <input
                        autoComplete="off"
                        className="rounded-md py-3 px-4 mb-6"
                        placeholder="email"
                        name="email"
                        type="email"
                    />
                    <textarea
                        autoComplete="off"
                        className="rounded-md py-3 px-4 h-40"
                        name="message"
                        placeholder="message. . ."
                    />
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
