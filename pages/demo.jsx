import * as React from "react";

function Demo() {
  return (
    <div>
      <img
        className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-64 sm:object-cover sm:object-center"
        src="/images/profile.jpg"
        alt="second picture"
      />
      <h1 className="mt-6 text-2xl tracking-tighter font-semibold text-gray-600 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
        学习、分享
      </h1>
    </div>
  );
}

export default Demo;
