import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Overflow</h1>
      <p className='pb-5'>Controls how content behaves when it exceeds the element’s size.</p>

      <p className="bold">✅ Example: Hiding Overflowing Content</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
      <code>
        div &#123; <br />
        &ensp; width: 200px; <br />
        &ensp; height: 100px; <br />
        &ensp; overflow: hidden; <br />
        &#125;
      </code>
      </pre>
      <p className="bold">✅ Example: Scrollable Content</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
      <code>
        div &#123; <br />
        &ensp; width: 200px; <br />
        &ensp; height: 100px; <br />
        &ensp; overflow: scroll; <br />
        &#125;
      </code>
      </pre>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Value</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Effect</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">visible</code></td>
          <td className='border border-black dark:border-gray-500'>	Default (content overflows)</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">hidden</code></td>
          <td className='border border-black dark:border-gray-500'>Hides overflowing content</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">scroll</code></td>
          <td className='border border-black dark:border-gray-500'>Adds scrollbar</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">auto</code></td>
          <td className='border border-black dark:border-gray-500'>Adds scrollbar only if needed</td>
        </tr>
      </table>
    </div>
  )
}

