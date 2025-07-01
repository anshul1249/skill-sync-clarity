
import { ResumeAnalyzer } from "@/components/ResumeAnalyzer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Resume Matcher
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Get instant match scores and detailed feedback for your resume
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <ResumeAnalyzer />
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-white/20 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">
            Built with AI to help you land your dream job ✨
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Free tool for students and job seekers
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
