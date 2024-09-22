import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">AI Resume Generator</h2>
      <ul>
        <li className="mb-4">
          <Link href="/resume">Create Resume</Link>
        </li>
        <li className="mb-4">Generate Cover Letter</li>
        <li>Saved Documents</li>
      </ul>
    </div>
  );
}