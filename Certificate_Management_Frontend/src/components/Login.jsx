function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-blue-50 dark:bg-blue-900 rounded-2xl shadow-xl overflow-hidden">


        {/* Student Email */}
        <div className="px-6 pt-6">
          <label className="flex flex-col gap-1.5">
            <p className="text-[#111318] dark:text-white text-base font-medium">
              Student Email
            </p>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#637588] dark:text-gray-500">
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
              </span>

              <input
                type="email"
                placeholder="name@university.edu"
                className="flex w-full rounded-xl border border-[#dbdfe6] dark:border-gray-700 
                bg-white dark:bg-[#1a202c] h-14 pl-11 pr-4 text-base 
                text-[#111318] dark:text-white placeholder:text-[#9ca3af] 
                dark:placeholder:text-gray-600 focus:outline-none 
                focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </label>
        </div>

        {/* Password */}
        <div className="px-6 pt-4">
          <label className="flex flex-col gap-1.5">
            <p className="text-[#111318] dark:text-white text-base font-medium">
              Password
            </p>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#637588] dark:text-gray-500">
                <span className="material-symbols-outlined text-[20px]">
                  lock
                </span>
              </span>

              <input
                type="password"
                placeholder="Enter your password"
                className="flex w-full rounded-xl border border-[#dbdfe6] dark:border-gray-700 
                bg-white dark:bg-[#1a202c] h-14 pl-11 pr-12 text-base 
                text-[#111318] dark:text-white placeholder:text-[#9ca3af] 
                dark:placeholder:text-gray-600 focus:outline-none 
                focus:ring-2 focus:ring-primary/50 transition-all"
              />

              <button
                type="button"
                className="absolute right-0 top-0 h-full px-4 flex items-center 
                justify-center text-[#637588] dark:text-gray-500 
                hover:text-[#111318] dark:hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">
                  visibility
                </span>
              </button>
            </div>

            <div className="flex justify-end pt-2">
              <a href="#" className="text-primary text-sm font-medium hover:underline">
                Forgot Password?
              </a>
            </div>
          </label>
        </div>

        {/* Login Button */}
        <div className="px-6 pt-4">
          <button
            className="w-full bg-primary hover:bg-primary-hover text-white 
            h-14 rounded-xl font-bold text-base shadow-lg 
            shadow-primary/30 transition-all active:scale-[0.98] 
            flex items-center justify-center gap-2"
          >
            <span>Log In</span>
            <span className="material-symbols-outlined text-[20px]">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Alternative Login */}
        <div className="px-6 py-6 flex flex-col items-center gap-4">
          <div className="w-full flex items-center gap-3">
            <div className="h-px bg-[#e5e7eb] dark:bg-gray-800 flex-1"></div>
            <span className="text-[#637588] dark:text-gray-500 text-sm font-medium">
              or
            </span>
            <div className="h-px bg-[#e5e7eb] dark:bg-gray-800 flex-1"></div>
          </div>

          <a
            href="#"
            className="text-[#111318] dark:text-white text-sm font-medium 
            hover:text-primary transition-colors flex items-center gap-2 p-2"
          >
            <span className="material-symbols-outlined text-[18px]">
              admin_panel_settings
            </span>
            Login as Faculty or Admin
          </a>
        </div>

        {/* Footer */}
        <div className="pb-8 pt-2 px-6">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#637588] dark:text-gray-400 text-sm text-center">
              Don't have an account?
              <a href="#" className="text-primary font-bold hover:underline ml-1">
                Register Now
              </a>
            </p>

            <a
              href="#"
              className="text-[#9ca3af] dark:text-gray-600 text-xs 
              font-medium hover:text-[#637588] dark:hover:text-gray-400"
            >
              Need help? Contact Support
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
