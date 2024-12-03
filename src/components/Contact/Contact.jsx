function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6d34c84e-6821-4992-bc9d-25eec3a78692");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div className="bg-gray-900 px-6 pt-[72px] shadow-lg w-full mx-auto min-h-screen">
      <h1 className="text-[45px] font-bold text-[#a16925] mb-8 text-center uppercase font-montserrat">
        Contact Us
      </h1>
      <form
          onSubmit={onSubmit}
          className="contact-right flex flex-col items-start gap-[20px] sm:gap-[25px] md:gap-[30px] sm:w-[45%] mx-auto"
        >
          <label
            htmlFor="name"
            className="dark:text-[#d8d8d8] text-[#161513] text-[18px] sm:text-[20px] md:text-[22px] font-medium capitalize"
          >
            your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
            className="w-[300px] sm:w-[450px] md:w-[550px] lg:w-[100%] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[78px] pl-[15px] rounded-[4px] bg-[#32323c] dark:text-[#a0a0a0] text-white text-[16px] sm:text-[18px] md:text-[20px] border-none"
          />
          <label
            htmlFor="email"
            className="dark:text-[#d8d8d8] text-[#161513] text-[18px] sm:text-[20px] md:text-[22px] font-medium capitalize"
          >
            your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            className="w-[300px] sm:w-[450px] md:w-[550px] lg:w-[100%] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[78px] pl-[15px] rounded-[4px] bg-[#32323c] dark:text-[#a0a0a0] text-white text-[16px] sm:text-[18px] md:text-[20px] border-none"
          />
          <label
            htmlFor="mess"
            className="dark:text-[#d8d8d8] text-[#161513] text-[18px] sm:text-[20px] md:text-[22px] font-medium capitalize"
          >
            Write your message here
          </label>
          <textarea
            name="message"
            id="mess"
            rows="8"
            placeholder="Enter your message"
            required
            className="w-[300px] sm:w-[400px] md:w-[550px] lg:w-[100%] h-auto p-[20px] sm:p-[22px] md:p-[25px] rounded-[4px] bg-[#32323c] dark:text-[#a0a0a0] text-white text-[16px] sm:text-[18px] md:text-[20px] border-none"
          ></textarea>
          <input type="hidden" name="subject" />
          <button
            type="submit"
            className="contact-submit border-none text-white bg-[#a16925] rounded-full text-[18px] sm:text-[20px] md:text-[22px] py-[15px] sm:py-[18px] md:py-[20px] px-[40px] sm:px-[50px] md:px-[60px] lg:px-[80px] mb-[50px] cursor-pointer capitalize transition-transform duration-300 hover:scale-[1.1]"
          >
            submit now
          </button>
          </form>
    </div>
  );
}

export default Contact;