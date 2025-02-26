import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Spacing</h1>
      <p>Spacing is controlled using <span className="bold">margin</span>, <span className="bold">padding</span>, and <span className="bold">gap</span>.</p>

      <hr className="nt-5 mb-5" />

      <ol className="ml-5 mt-5">
        <li><code className="code dark:bg-gray-800 p-2">margin</code><span className="bold"> (Outside Spacing)</span></li>
        <p className="pt-2">Adds space <span className="bold">around</span> an element.</p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            .box &#123; <br />
            &ensp; margin: 20px; <br />
            &#125;
          </code>
        </pre>
        <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Value</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Effect</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">px</code></td>
          <td className='border border-black dark:border-gray-500'>Fixed margin </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">%</code></td>
          <td className='border border-black dark:border-gray-500'>Relative margin </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">auto</code></td>
          <td className='border border-black dark:border-gray-500'>Centers element </td>
        </tr>
      </table>
      <li><code className="code dark:bg-gray-800 p-2">padding</code><span className="bold"> (Inside Spacing)</span></li>
        <p className="pt-2">Adds space <span className="bold">inside</span> an element.</p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            .box &#123; <br />
            &ensp; padding: 20px; <br />
            &#125;
          </code>
        </pre>
        <li><code className="code dark:bg-gray-800 p-2">gap</code><span className="bold"> (Flexbox & Grid Spacing)</span></li>
        <p className="pt-2">Used to add <span className="bold"> spacing between flex/grid items.</span></p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            .container &#123; <br />
            &ensp; display: flex; <br />
            &ensp; gap: 10px; <br />
            &#125;
          </code>
        </pre>
      </ol>
    </div>
  )
}

