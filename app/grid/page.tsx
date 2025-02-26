import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Grid</h1>
      <p>CSS Grid Layout is a powerful <span className="bold">two-dimensional layout system</span> for arranging elements into rows and columns.</p>
      <p className="text-lg pb-2"> How to Enable Grid?</p>
      <p>Set <code className="code dark:bg-gray-800 p-2">display: grid;</code> on a container:</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .container &#123; <br />
          &ensp;  display: grid; <br />
          &#125;
        </code>
      </pre>

      <hr className="mt-5 mb-5" />

      <p className="text-lg pb-2">Main Grid Properties </p>
      <ol className='mt-5 mb-5'>
      <li><code className="code dark:bg-gray-800 p-2">grid-template-columns</code><span className="bold"> (Define Columns)</span></li>
        <p className='pt-2'>Specifies the number and size of columns.</p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .container &#123; <br />
          &ensp; grid-template-columns: 100px 200px auto; <br />
          &#125;
        </code>
      </pre>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Value</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Effect</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">px, %</code></td>
          <td className='border border-black dark:border-gray-500'>Fixed width</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">auto</code></td>
          <td className='border border-black dark:border-gray-500'>Adjusts to content</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">fr</code></td>
          <td className='border border-black dark:border-gray-500'>Flexible fraction</td>
        </tr>
      </table>
      <li><code className="code dark:bg-gray-800 p-2">grid-template-rows</code><span className="bold"> (Define Rows)</span></li>
        <p className='pt-2'>Controls row height.</p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .container &#123; <br />
          &ensp; grid-template-rows: 100px auto; <br />
          &#125;
        </code>
      </pre>
      <li><code className="code dark:bg-gray-800 p-2">grid-gap</code><span className="bold"> (Spacing Between Grid Items)</span></li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .container &#123; <br />
          &ensp; grid-gap: 10px; <br />
          &#125;
        </code>
      </pre>
      <li><code className="code dark:bg-gray-800 p-2">grid-column</code> <span className="bold">and </span><code className="code dark:bg-gray-800 p-2">grid-row</code><span className="bold"> (Span Items Across Grid)</span></li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .item &#123; <br />
          &ensp; grid-column: 1 / 3; <span className="text-gray-400"><i>/ * Spans two columns * /</i></span> <br />
          &#125;
        </code>
      </pre>
      </ol>

      <hr className="mt-5 mb-5" />

      <p className="text-lg pb-2">Example: Basic 3-Column Grid Layout</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .container &#123; <br />
          &ensp; display: grid;  <br />
          &ensp; grid-template-columns: repeat(3, 1fr); <br />
          &ensp; gap: 10px; <br />
          &#125;
        </code>
      </pre>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          &lt;div class=&quot;container&quot;&gt; <br />
          &ensp;&lt;div class=&quot;box&quot;&gt; 1 &lt;/div&gt; <br />
          &ensp;&lt;div class=&quot;box&quot;&gt; 2 &lt;/div&gt; <br />
          &ensp;&lt;div class=&quot;box&quot;&gt; 3 &lt;/div&gt; <br />
          &lt;/div&gt;
        </code>
      </pre>
      <iframe height="300" scrolling="no" title="Untitled" src="https://codepen.io/Wghaaj/embed/vEYKPxP?default-tab=html%2Cresult&editable=true" loading="lazy" >
        See the Pen <a href="https://codepen.io/Wghaaj/pen/vEYKPxP">
        Untitled</a> by Diana Kravchuk (<a href="https://codepen.io/Wghaaj">@Wghaaj</a>)
        on <a href="https://codepen.io">CodePen</a>.
    </iframe>
    </div>
  )
}

