export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          🚀 Deployment Pipeline Test
        </h1>
        <div className="text-center">
          <h2 className="text-2xl mb-4">Quick Test</h2>
          <p className="text-gray-600 mb-8">
            This is a test Next.js application generated to verify the GitHub → Vercel deployment pipeline.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">✅ Next.js 14</h3>
              <p className="text-gray-600">App Router with TypeScript</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">✅ GitHub</h3>
              <p className="text-gray-600">Repository created successfully</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">✅ Vercel</h3>
              <p className="text-gray-600">Live deployment complete</p>
            </div>
          </div>
          <div className="mt-8 p-4 bg-green-100 rounded-lg">
            <p className="text-green-800 font-medium">
              🎉 Deployment pipeline test successful! 
              Generated at: {new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}