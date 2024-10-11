'use client';

import Layout from '../_components/layout/Layout';

import { useState, useEffect } from 'react';

interface ResumePageProps {}

const ResumePage: React.FC<ResumePageProps> = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8 min-h-screen">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full max-w-4xl bg-black border-purple-800 rounded-xl overflow-hidden shadow-lg opacity-90 p-6">
                        <div className="mb-6 flex flex-col justify-between items-start">
                            <p className="text-white text-sm">
                                You can view and download my professional resume here.
                            </p>
                            <div className="mt-4">
                                <button
                                  className="bg-purple-900 hover:bg-purple-800 text-white py-2 px-4 rounded inline-flex items-center"
                                  onClick={() => window.open('your_resume_link.pdf', '_blank')}
                                >
                                    Download PDF
                                </button>
                            </div>
                        </div>
                        {isLoading ? (
                            <div className="animate-pulse flex space-x-4">
                                <div className="flex-1 space-y-4 py-1">
                                    <div className="h-4 bg-purple-300 rounded w-3/4"/>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-purple-300 rounded"/>
                                        <div className="h-4 bg-purple-300 rounded w-5/6"/>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <iframe
                              src="your_resume_link.pdf"
                              style={{ height: '500px', width: '100%' }}
                              frameBorder="0"
                              title="Your Resume"
                            />
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ResumePage;
