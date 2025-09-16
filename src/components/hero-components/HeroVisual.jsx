import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const HeroVisual = () => {
  // Drag and drop & file select logic (now only in preview section)
  const [dragActive, setDragActive] = React.useState(false);
  const [selectedFiles, setSelectedFiles] = React.useState([]);

  // Remove file by index
  const handleRemoveFile = (idx) => {
    setSelectedFiles(files => files.filter((_, i) => i !== idx));
  };
  const inputRef = React.useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFiles(prev => {
        const newFiles = Array.from(e.dataTransfer.files);
        // Avoid duplicates by name
        const allFiles = [...prev, ...newFiles.filter(f => !prev.some(p => p.name === f.name && p.size === f.size))];
        return allFiles;
      });
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(prev => {
        const newFiles = Array.from(e.target.files);
        // Avoid duplicates by name
        const allFiles = [...prev, ...newFiles.filter(f => !prev.some(p => p.name === f.name && p.size === f.size))];
        return allFiles;
      });
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="relative w-full lg:w-4/10">
      <div className="group">
        {/* Outer Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

        {/* Inner Glow Border */}
        <div className="absolute -inset-[4px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl opacity-90"></div>

        {/* Main Content Box */}
        <div className="relative rounded-xl p-6 bg-white/90 dark:bg-slate-900/60 backdrop-blur-sm border border-cyan-400/20">
          {/* Chat Interface Mockup */}
          <div className="space-y-4 text-gray-900 dark:text-white">
            {/* Chat Header */}
            <div className="flex items-center justify-between pb-4 border-b border-cyan-400/30">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 transparent rounded-full">
                  <Image
                    src="/Images/ai-logo.png"
                    alt="Coffee Mustache Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">
                  Coffee Mustache Assistant
                </span>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Upload Report Section (removed file input, just info) */}
            <div className="bg-gray-100/80 dark:bg-slate-800/60 rounded-lg p-4 border border-cyan-400/20">
              <p className="text-cyan-600 dark:text-cyan-300 text-sm mb-2">
                Upload Café Report
              </p>
              <p className="text-gray-900 dark:text-gray-300 mb-2">
                Sales, menu performance, or staff data — AI will analyze and generate growth actions.
              </p>
            </div>

            {/* AI Insights Preview with drag-and-drop and file select */}
            <form
              className={`bg-gray-50/80 dark:bg-slate-800/40 border-4 border-dotted border-teal-700 dark:border-purple-400 rounded-lg h-48 flex items-center justify-center transition-all cursor-pointer ${dragActive ? 'border-purple-500 bg-purple-50/40 dark:bg-purple-900/30' : ''}`}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              onClick={handleButtonClick}
              onSubmit={e => e.preventDefault()}
            >
              <div className="text-center w-full">
                <input
                  ref={inputRef}
                  type="file"
                  accept=".xlsx,.xls,.csv,.pdf,.doc,.docx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.gif"
                  multiple
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />
                <div className="w-16 h-16 bg-transparent rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/Images/ai-logo.png"
                    alt="AI Response"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="block text-xs text-gray-700 dark:text-gray-300 mb-2">
                  Click or drag & drop file here
                </span>
                <div className="text-cyan-600 dark:text-cyan-300 text-sm">
                  {selectedFiles.length > 0
                    ? <ul className="list-disc list-inside text-left inline-block mx-auto">
                      {selectedFiles.map((file, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span>{file.name}</span>
                          <button
                            type="button"
                            className="ml-1 text-gray-400 hover:text-red-500 focus:outline-none"
                            aria-label={`Remove ${file.name}`}
                            onClick={e => {
                              e.stopPropagation();
                              handleRemoveFile(idx);
                            }}
                          >
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </button>
                        </li>
                      ))}
                    </ul>
                    : 'No file selected'}
                </div>
              </div>
            </form>

            {/* Input Bar */}
            <div className="flex items-center space-x-3 pt-4">
              <div className="flex-1 relative group">
                {/* Input Outer Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-700 to-teal-700 rounded-full blur opacity-50 group-focus-within:opacity-75 transition-opacity duration-300"></div>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="relative w-full bg-gray-100/80 dark:bg-slate-800/40 rounded-full px-4 py-3 border border-teal-700 text-gray-900 dark:text-slate-300 placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:border-teal-700 transition-colors text-sm"
                />
              </div>
              <button className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-cyan-400/25">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
