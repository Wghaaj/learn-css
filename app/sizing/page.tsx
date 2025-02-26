import '../css/welcome.css';
import '../css/table.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">CSS Units for Sizing</h1>
      <p className="pb-2">CSS provides different units to control the size of elements.</p>
      <p className="bold">✅ Absolute Units (Fixed Sizes)</p>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Unit</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Example</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Description</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">px</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">width: 100px;</code></td>
          <td className='border border-black dark:border-gray-500'>Pixels (fixed size)</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">pt</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">font-size: 12pt;</code></td>
          <td className='border border-black dark:border-gray-500'>Points (used in print)</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">cm</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">width: 5cm;</code></td>
          <td className='border border-black dark:border-gray-500'>Centimeters</td>
        </tr>
      </table>
      <p>Absolute sizes <span className="bold">do not change</span> based on screen size.</p>

      <hr className="mt-5 mb-5" />

      <p className="bold">✅ Relative Units (Flexible Sizes)</p>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Unit</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Example</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Description</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">%</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">width: 50%;</code></td>
          <td className='border border-black dark:border-gray-500'>Parent element</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">em</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">font-size: 1.5em;</code></td>
          <td className='border border-black dark:border-gray-500'>Parent’s font size</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">rem</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">font-size: 1.5rem;</code></td>
          <td className='border border-black dark:border-gray-500'>Root font size (html)</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">vw</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">width: 50vw;</code></td>
          <td className='border border-black dark:border-gray-500'>Viewport width</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">vh</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">height: 50vh;</code></td>
          <td className='border border-black dark:border-gray-500'>Viewport height</td>
        </tr>
      </table>
      <p>Relative sizes <span className="bold">change</span> based on screen size or parent element size.</p>

      <hr className="mt-5 mb-5" />

      <p className="text-lg pb-2">Examples of Sizing in CSS</p>
      <p className="bold">✅ Using Pixels (<code className="code dark:bg-gray-800 p-2">px</code>) </p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          div &#123; <br></br>
          &ensp; width: 200px; <br />
          &ensp; height: 100px; <br />
          &#125;
        </code>
      </pre>
      <p className="bold">✅ Using Percentage (<code className="code dark:bg-gray-800 p-2">%</code>) </p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          div &#123; <br></br>
          &ensp; width: 50%; <span className="text-gray-400"><i>/ *  50% of the parents width  * / </i></span> <br />
          &#125;
        </code>
      </pre>
      <p className="bold">✅ Using (<code className="code dark:bg-gray-800 p-2">em</code>) for Font Sizing </p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          body &#123; <br></br>
          &ensp; font-size: 16px; <br />
          &#125;
          <br />
          p &#123; <br></br>
          &ensp; font-size: 1.5em; <span className="text-gray-400"><i>/ *  51.5 times the body font size (24px)  * / </i></span> <br />
          &#125;
        </code>
      </pre>
      <p className="bold">✅ Using Viewport Units (<code className="code dark:bg-gray-800 p-2">vw</code> & <code className="code dark:bg-gray-800 p-2">vh</code>) </p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .fullscreen  &#123; <br></br>
          &ensp; width: 100vw; <span className="text-gray-400"><i>/ *  Takes full screen width  * / </i></span> <br />
          &ensp; height: 100vh; <span className="text-gray-400"><i>/ *  Takes full screen height  * / </i></span> <br />
          &#125;
        </code>
      </pre>
    </div>
  )
}

