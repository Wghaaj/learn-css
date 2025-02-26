import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Transitions</h1>
      <p className='pb-5'>Transitions make changes <span className="bold">smooth</span> instead of instant.</p>

      <p className="bold">✅ Example: Smooth Background Change</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          button &#123; <br />
          &ensp; background: blue; <br />
          &ensp; transition: background 0.5s ease; <br />
          &#125;
          <br />
          <br />
          button:hover &#123; <br />
          &ensp; background: red; <br />
          &#125;
        </code>
      </pre>
      <p>The background <span className="bold">gradually changes</span> from <span className="bold">blue to red</span>.</p>

      <hr className="mt-5 mb-5" />

      <p className="text-lg pb-5">Transition Properties</p>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Property</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Description</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">transition-property</code></td>
          <td className='border border-black dark:border-gray-500'>	What to animate ( <code className="code dark:bg-gray-800 p-2">background</code>, <code className="code dark:bg-gray-800 p-2">width</code>, <code className="code dark:bg-gray-800 p-2">opacity</code>, etc. ) </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">transition-duration</code></td>
          <td className='border border-black dark:border-gray-500'>How long it takes ( <code className="code dark:bg-gray-800 p-2">0.5s</code>, <code className="code dark:bg-gray-800 p-2">1s</code>, etc.) </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">transition-timing-function</code></td>
          <td className='border border-black dark:border-gray-500'>Speed curve ( <code className="code dark:bg-gray-800 p-2">ease</code>, <code className="code dark:bg-gray-800 p-2">linear</code>, <code className="code dark:bg-gray-800 p-2">ease-in-out</code> )</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">transition-delay</code></td>
          <td className='border border-black dark:border-gray-500'>Delay before transition starts</td>
        </tr>
      </table>

      <p className="text-lg pt-5">Example: Smooth Width Change</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          div &#123; <br />
          &ensp; width: 100px;  <br />
          &ensp; transition: width 1s ease-in-out; <br />
          &#125;
          <br />
          <br />
          div:hover &#123; <br />
          &ensp; width: 300px; <br />
          &#125;
        </code>
      </pre>
      <p>When hovered, the <code className="code dark:bg-gray-800 p-2">&lt;div&gt;</code> <span className="bold">expands smoothly.</span></p>
    </div>
  )
}

