
import '../css/welcome.css';
import '../css/table.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Specificity</h1>
      <p className="pt-5 pb-2">Specificity is a <span className="bold">ranking system</span> used by the browser to decide <span className="bold">which rule applies</span> when multiple rules target the same element.</p>
      <p>✅ Higher specificity = Higher priority</p>
      <hr className="mt-5 mb-5" />

      <p className="text-lg">How Specificity Is Calculated</p>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Selector Type</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Example</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Specificity Score</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'>Inline styles</td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">style=&quot;color: red;&quot;</code></td>
          <td className='border border-black dark:border-gray-500'>1000</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'>ID Selector</td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">style=&quot;#header&quot;</code></td>
          <td className='border border-black dark:border-gray-500'>100</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'>Class, Attribute, Pseudo-Class</td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">.box</code>, <code className="code dark:bg-gray-800 p-2">[type=&quot;text&quot;]</code>, <code className="code dark:bg-gray-800 p-2">:hover</code></td>
          <td className='border border-black dark:border-gray-500'>10</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'>Element and Pseudo-Element</td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">p</code>, <code className="code dark:bg-gray-800 p-2">::before</code></td>
          <td className='border border-black dark:border-gray-500'>1</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'>Universal Selector</td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">*</code></td>
          <td className='border border-black dark:border-gray-500'>0</td>
        </tr>
      </table>

      <hr className="mt-5 mb-5" />
      <p className="text-lg mb-5">Examples of Specificity in Action</p>
      <p className="pb-2 bold">✅ Example 1: ID vs Class</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          #title &#123; <br></br>
          &ensp; color: red; <br></br>
          &#125;
          <br />
          .title &#123; <br></br>
          &ensp; color: blue; <br></br>
          &#125;
        </code>
      </pre>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          &lt;h1 id=&quot;title&quot; class=&quot;title&quot;&gt; <span className="text-gray-400"><i>/ * Will be red ( higher specificity ) * / </i></span>
        </code>
      </pre>
      <p className="pb-2 bold">✅ Example 2: Inline Styles Win </p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          &lt;p id=&quot;text&quot; class=&quot;paragraph&quot; style=&quot; color: green;&quot;&gt; Hello World &lt;/p&gt;
        </code>
      </pre>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          #text &#123; <br></br>
          &ensp; color: red; <span className="text-gray-400"><i>/ * Will be ignored * / </i></span><br></br>
          &#125;
          <br />
          .paragraph &#123; <br></br>
          &ensp; color: blue; <span className="text-gray-400"><i>/ * Will be ignored * / </i></span><br></br>
          &#125;
        </code>
      </pre>
      <p className="pb-5">The inline style <span className="bold">wins</span> because it has a <span className="bold">specificity of 1000.</span></p>
      <p className="pb-2 bold">✅ Example 3: Combining Selectors Increases Specificity </p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          p &#123; <br></br>
          &ensp; color: blue; <span className="text-gray-400"><i>/ *  1  * / </i></span><br></br>
          &#125;
          <br />
          div p &#123; <br></br>
          &ensp; color: green; <span className="text-gray-400"><i>/ *  2  * / </i></span><br></br>
          &#125;
          <br />
          section div p &#123; <br></br>
          &ensp; color: red; <span className="text-gray-400"><i>/ *  3 - This wins  * / </i></span><br></br>
          &#125;
        </code>
      </pre>

      <hr className="mt-5 mb-5" />

      <p className="text-lg pb-2">How to Solve Specificity Issues</p>
      <li>✅ Use more specific selectors</li>
      <li>✅ Avoid <code className="code dark:bg-gray-800 p-2">!important</code> unless necessary </li>
      <li>✅ Use source order wisely</li>
    </div>
  )
}

