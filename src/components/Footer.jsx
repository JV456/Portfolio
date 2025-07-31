import { github } from "../assets";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-black-100 to-tertiary"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/30 via-purple-900/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_var(--tw-gradient-stops))] from-transparent via-violet-500/5 to-transparent"></div>
      
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            {/* About Section - Left */}
            <div className="space-y-6 lg:max-w-md">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                  Jai Vadula
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-violet-400 to-purple-600 rounded-full"></div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 backdrop-blur-sm">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-30"></div>
                </div>
                <span className="text-green-300 text-sm font-medium">Available for new opportunities</span>
              </div>
            </div>

            {/* Connect Section - Right */}
            <div className="space-y-4">
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-bold bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                  Let's Connect
                </h4>
                <div className="w-16 h-0.5 bg-gradient-to-r from-violet-400 to-purple-600 rounded-full mx-auto lg:mx-0 mt-2"></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Enhanced GitHub Link */}
                <a
                  href="https://github.com/jv456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-black/40 via-gray-900/30 to-violet-900/20 border border-gray-700/50 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 hover:scale-[1.02] backdrop-blur-xl"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                  
                  {/* Enhanced Icon Container */}
                  <div className="relative p-3 bg-gradient-to-br from-white/10 to-gray-800/30 rounded-xl group-hover:from-white/20 group-hover:to-gray-700/40 transition-all duration-500 border border-white/10 group-hover:border-white/20">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img src={github} alt="GitHub" className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300 filter brightness-110" />
                  </div>
                  
                  {/* Enhanced Text */}
                  <div className="relative z-10">
                    <div className="text-white text-base font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-100 group-hover:to-white group-hover:bg-clip-text transition-all duration-300">
                      GitHub
                    </div>
                    <div className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                      View my projects
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </a>

                {/* Enhanced LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/jai-vadula/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-violet-900/20 border border-blue-700/40 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] backdrop-blur-xl"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                  
                  {/* Enhanced Icon Container */}
                  <div className="relative p-3 bg-gradient-to-br from-blue-500/15 to-blue-800/25 rounded-xl group-hover:from-blue-400/25 group-hover:to-blue-600/35 transition-all duration-500 border border-blue-400/20 group-hover:border-blue-300/40">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="w-6 h-6 fill-blue-100 group-hover:fill-white relative z-10 group-hover:scale-110 transition-all duration-300" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  
                  {/* Enhanced Text */}
                  <div className="relative z-10">
                    <div className="text-white text-base font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:via-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                      LinkedIn
                    </div>
                    <div className="text-blue-200 text-sm group-hover:text-blue-100 transition-colors duration-300">
                      Let's network
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
                  </div>
                </a>

                {/* Enhanced Email Link */}
                <a
                  href="mailto:jaivadula@gmail.com"
                  className="group relative overflow-hidden flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-emerald-900/30 via-green-800/20 to-violet-900/20 border border-emerald-700/40 hover:border-emerald-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-[1.02] backdrop-blur-xl"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                  
                  {/* Enhanced Icon Container */}
                  <div className="relative p-3 bg-gradient-to-br from-emerald-500/15 to-green-800/25 rounded-xl group-hover:from-emerald-400/25 group-hover:to-green-600/35 transition-all duration-500 border border-emerald-400/20 group-hover:border-emerald-300/40">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="w-6 h-6 fill-emerald-100 group-hover:fill-white relative z-10 group-hover:scale-110 transition-all duration-300" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  
                  {/* Enhanced Text */}
                  <div className="relative z-10">
                    <div className="text-white text-base font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-200 group-hover:via-white group-hover:to-emerald-200 group-hover:bg-clip-text transition-all duration-300">
                      Email
                    </div>
                    <div className="text-emerald-200 text-sm group-hover:text-emerald-100 transition-colors duration-300">
                      jaivadula@gmail.com
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;
