import '../css/welcome.css';
import '../css/table.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Borders</h1>
      <p className="pb-5">Borders <span className="bold">surround elements</span>, separating them from other content.</p>

      <p className="text-lg">Basic Border Syntax</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          div &#123; <br />
          &ensp; border: 2px solid black; <br />
          &#125;
        </code>
      </pre>
      <p>Creates a <span className="bold">2px solid black border.</span></p>

      <hr className="mt-5 mb-5" />

      <p className="text-lg">Border Styles</p>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Style</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Example</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">solid</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">border: 2px solid black;</code></td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">dashed</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">border: 2px dashed red;</code></td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">dotted</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">border: 2px dotted blue;</code> </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">double</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">border: 4px double green;</code></td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">groove</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">border: 4px groove gray;</code> </td>
        </tr>
      </table>

      <hr className="mt-5 mb-5" />

      <p className="text-lg pb-5">Rounded Borders (<code className="code dark:bg-gray-800 p-2">border-radius</code>)</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
        button &#123; <br />
          &ensp; border-radius: 10px; <br />
          &#125;
        </code>
      </pre>
      <p>Makes the <span className="bold">corners rounded.</span></p>

      <p className="text-lg pb-5 pt-5">Border-Specific Sides</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
        div &#123; <br />
          &ensp; border-top: 2px solid red;
          &ensp; border-left: 5px dashed blue; <br />
          &#125;
        </code>
      </pre>
      <p>Borders can be <span className="bold">applied to one side</span> only.</p>

      <hr className="mt-5 mb-5" />

      <p className="text-lg pb-5">Example: A Button with a Fancy Border</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
        button &#123; <br />
          &ensp;  border: 3px solid black;
          &ensp;  border-radius: 50px; <br />
          &#125;
        </code>
      </pre>
      <iframe height="300" scrolling="no" title="button" src="https://codepen.io/Wghaaj/embed/azbmQNy?default-tab=html%2Cresult&editable=true" loading="lazy">
        See the Pen <a href="https://codepen.io/Wghaaj/pen/azbmQNy">
        button</a> by Diana Kravchuk (<a href="https://codepen.io/Wghaaj">@Wghaaj</a>)
        on <a href="https://codepen.io">CodePen</a>.
    </iframe>
    </div>
  )
}

