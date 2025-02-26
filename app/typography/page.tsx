import '../css/welcome.css';
import '../css/table.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Text & Typography</h1>
      <p className="text-lg">Basic Text Properties</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          p &#123; <br />
          &ensp; color: red; <br />
          &ensp; font-size: 16px; <br />
          &ensp; font-weight: bold; <br />
          &#125;
        </code>
      </pre>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Property</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Example</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">color</code></td>
          <td className='border border-black dark:border-gray-500'>	<code className="code dark:bg-gray-800 p-2">color: blue;</code></td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">font-size	</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">font-size: 20px;</code></td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">font-weight</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">font-weight: bold;</code></td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">text-align</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">text-align: center;</code></td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">text-decoration</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">text-decoration: underline;</code></td>
        </tr>
      </table>
      <p className="bold">✅ Example: Uppercase Text</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
      <code>
        p &#123; <br />
        &ensp; text-transform: uppercase; <br />
        &#125;
      </code>
      </pre>
      <p className="bold">✅ Example: Letter Spacing</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
      <code>
        h1 &#123; <br />
        &ensp; letter-spacing: 3px; <br />
        &#125;
      </code>
      </pre>
      <p className="bold">✅ Example: Line Height</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
      <code>
        p &#123; <br />
        &ensp; line-height: 1.5; <br />
        &#125;
      </code>
      </pre>
      <p className="bold">✅ ✅ Example: Custom Font</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
      <code>
      @import url(&quot;https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap&quot;);
      <br />
      <br />
        body &#123; <br />
        &ensp; font-family: &quot;Poppins&quot;, sans-serif; <br />
        &#125;
      </code>
      </pre>
      <p> Uses the <span className="bold">Poppins font</span> from Google Fonts.</p>
    </div>
  )
}

