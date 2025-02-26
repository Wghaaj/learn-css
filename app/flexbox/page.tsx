import '../css/welcome.css';
import '../css/table.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Flexbox</h1>
      <p className="pb-5">Flexbox (Flexible Box Layout) is a <span className="bold">CSS layout model</span> that allows you to easily align and distribute elements <span className="bold">horizontally or vertically</span> within a container.</p>
      <p className="text-lg pb-2"> How to Enable Flexbox?</p>
      <p>To use Flexbox, set <code className="code dark:bg-gray-800 p-2">display: flex;</code> on a container:</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .container &#123; <br />
          &ensp; display: flex; <br />
          &#125;
        </code>
      </pre>

      <hr className="mt-5 mb-5" />
      <p className="text-lg">Main Flexbox Properties</p>
      <ol className='mt-5 ml-5'>
        <li><code className="code dark:bg-gray-800 p-2">flex-direction</code><span className="bold"> (Row or Column?)</span></li>
        <p>Controls the main axis direction (horizontal or vertical).</p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .container &#123; <br />
          &ensp; display: flex; <br />
          &ensp; flex-direction: row; <span className="text-gray-400"><i>/ * Default: items placed in a row * /</i></span><br />
          &#125;
        </code>
      </pre>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Value</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Effect</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">row</code></td>
          <td className='border border-black dark:border-gray-500'>Left to right (default)</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">row-reverse</code></td>
          <td className='border border-black dark:border-gray-500'>Right to left</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">column</code></td>
          <td className='border border-black dark:border-gray-500'>Top to bottom</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">column-reverse	</code></td>
          <td className='border border-black dark:border-gray-500'>Bottom to top</td>
        </tr>
      </table>
      <li><code className="code dark:bg-gray-800 p-2">justify-content</code><span className="bold"> (Horizontal Alignment)</span></li>
        <p>Aligns items along the <span className="bold">main axis.</span></p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .container &#123; <br />
          &ensp; justify-content: center; <span className="text-gray-400"><i>/ * Center items horizontally * /</i></span><br />
          &#125;
        </code>
      </pre>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Value</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Effect</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">flex-start	</code></td>
          <td className='border border-black dark:border-gray-500'>Items start at the left (default) </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">center </code></td>
          <td className='border border-black dark:border-gray-500'>Items are centered </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">flex-end	</code></td>
          <td className='border border-black dark:border-gray-500'>Items start at the right </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">space-between </code></td>
          <td className='border border-black dark:border-gray-500'>Equal space between items </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">space-around	</code></td>
          <td className='border border-black dark:border-gray-500'>Space around each item </td>
        </tr>
      </table>
      <li><code className="code dark:bg-gray-800 p-2">align-items</code><span className="bold"> (Vertical Alignment)</span></li>
        <p>Aligns items along the <span className="bold">cross axis.</span></p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .container &#123; <br />
          &ensp; align-items: center; <span className="text-gray-400"><i>/ * Aligns items vertically * /</i></span><br />
          &#125;
        </code>
      </pre>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Value</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Effect</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">flex-start	</code></td>
          <td className='border border-black dark:border-gray-500'>Align items at the top </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">center</code></td>
          <td className='border border-black dark:border-gray-500'>Center items vertically</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">flex-end	</code></td>
          <td className='border border-black dark:border-gray-500'>Align items at the bottom </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">stretch</code></td>
          <td className='border border-black dark:border-gray-500'>Items stretch to fill container height </td>
        </tr>
      </table>
      <li><code className="code dark:bg-gray-800 p-2">flex-wrap</code><span className="bold"> (Wrap Items?)</span></li>
        <p>Controls whether items stay in one line or wrap.</p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .container &#123; <br />
          &ensp; flex-wrap: wrap; <span className="text-gray-400"><i>/ * Allow wrapping to a new line * /</i></span><br />
          &#125;
        </code>
      </pre>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Value</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Effect</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">nowrap</code></td>
          <td className='border border-black dark:border-gray-500'>All items in one line (default) </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">wrap</code></td>
          <td className='border border-black dark:border-gray-500'>Items wrap to a new line </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">wrap-reverse	</code></td>
          <td className='border border-black dark:border-gray-500'>Wrap in reverse order </td>
        </tr>
      </table>
      <li><code className="code dark:bg-gray-800 p-2">align-self</code><span className="bold"> (Align a Single Item)</span></li>
        <p>Aligns one specific item differently.</p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .item &#123; <br />
          &ensp; align-self: flex-end; <br />
          &#125;
        </code>
      </pre>
      </ol>

      <hr className="mt-5 mb-5" />

      <p className="text-lg"> Example: Centering Content with Flexbox</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .container &#123; <br />
          &ensp;display: flex; <br />
          &ensp;justify-content: center; <br />
          &ensp;align-items: center; <br />
          &ensp;height: 100vh; <br />
          &#125;
        </code>
      </pre>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          &lt;div class=&quot;container&quot;&gt; <br />
          &ensp; &lt;div class=&quot;box&quot;&gt; Centered Box &lt;/div&gt; <br />
          &lt;/div&gt;
        </code>
      </pre>
      <iframe height="300" scrolling="no" title="Untitled" src="https://codepen.io/Wghaaj/embed/ZYEpqJz?default-tab=html%2Cresult&editable=true" loading="lazy">
        See the Pen <a href="https://codepen.io/Wghaaj/pen/ZYEpqJz">
        Untitled</a> by Diana Kravchuk (<a href="https://codepen.io/Wghaaj">@Wghaaj</a>)
        on <a href="https://codepen.io">CodePen</a>.
    </iframe>
    </div>
  )
}

