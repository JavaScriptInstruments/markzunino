import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { Resend } from "resend";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const validateMessage = (value) => {
    const words = value.trim().split(/\s+/);
    return words.length > 10;
  };

  const SendEmail = async (data) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();

      console.log(JSON.stringify(responseData));

      if (responseData.id) {
        alert("Email Sent Successfully!");
        reset();
      }
    } catch (error) {
      alert("Failed to send email:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(SendEmail)} className="mb-20">
      <div className="space-y-12 p-20">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Place an enquiry
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Drop me a message to inquire about having my work featured in your
            gallery.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    type="text"
                    {...register("name", { required: "name is required" })}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="name"
                  />
                  {errors.FullName?.type === "required" && (
                    <span className="inline w-auto px-4 py-2 max-w-[50%]  bg-[#fce8e8] text-[#b92222]">
                      name is required
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  rows={8}
                  {...register("Message", {
                    required: "Message is required",
                    validate: validateMessage,
                  })}
                  placeholder="Write your message here"
                  className="pl-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.Message && (
                  <span className="inline w-auto px-4 py-2 max-w-[50%]  bg-[#fce8e8] text-[#b92222]">
                    {errors.Message?.type === "required"
                      ? "Message is required"
                      : errors.Message?.type === "validate"
                      ? "Message should have more than 10 words"
                      : ""}
                  </span>
                )}
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">
                Describe your request in a few sentences.
              </p> */}
            </div>

            {/* <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 mr-20">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
