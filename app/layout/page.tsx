import '../css/welcome.css';
import '../css/table.css'
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Layout</h1>
      <p className="text-lg pb-2">CSS Layout Techniques</p>
      <p className="pb-2">CSS provides different layout methods to arrange elements on the page.</p>
      <ol className='mt-5 ml-5'>
        <li className='bold pb-2'>Normal Flow (Default)</li>
        <p>By default, elements appear one after another in the order they are written.</p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            p &#123; <br />
            &ensp; display: block; <span className="text-gray-400"><i>/ * Blocks take full width * / </i></span> <br />
            &#125;
          </code>
        </pre>
        <li className='bold pb-2'>Flexbox (For One-Dimensional Layouts)</li>
        <p>Flexbox makes it easy to align items in <span className="bold">rows</span> or <span className="bold">columns</span>.</p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
          .container &#123; <br />
            &ensp; display: flex; <br />
            &ensp; justify-content: center; <span className="text-gray-400"><i>/ * Center items horizontally * / </i></span> <br />
            &ensp; align-items: center; <span className="text-gray-400"><i>/ * Center items vertically * / </i></span> <br />
            &#125;
          </code>
        </pre>
        <li className='bold pb-2'>Grid (For Two-Dimensional Layouts)</li>
        <p>CSS Grid allows you to create <span className="bold">complex layouts</span>.</p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
          .container &#123; <br />
            &ensp; display: grid; <br />
            &ensp; grid-template-columns: 1fr 2fr 1fr; <span className="text-gray-400"><i>/ * Three columns * / </i></span> <br />
            &#125;
          </code>
        </pre>
        <li className='bold pb-2'>Positioning (absolute, relative, fixed, sticky)</li>
        <p>Flexbox makes it easy to align items in <span className="bold">rows</span> or <span className="bold">columns</span>.</p>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
          .fixed-box &#123; <br />
            &ensp; position: fixed; <br />
            &ensp; top: 0; <br />
            &ensp; left: 0; <br />
            &#125;
          </code>
        </pre>
        <li className='bold pb-2'>Floats (Legacy Method)</li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            img &#123; <br />
            &ensp; float: left; <br />
            &ensp; margin-right: 10px; <br />
            &ensp; align-items: center; <br />
            &#125;
          </code>
        </pre>
        <li className='bold pb-2'>CSS Columns (For Multi-Column Layouts)</li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
          .text &#123; <br />
            &ensp; column-count: 3; <br />
            &#125;
          </code>
        </pre>
      </ol>

      <hr className="mt-5 mb-5" />

      <p className="text-lg pb-2">Choosing the Right Layout Technique</p>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Unit</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Example</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'>Simple row/column alignment</td>
          <td className='border border-black dark:border-gray-500'>Flexbox</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'>Complex, multi-row & column layouts</td>
          <td className='border border-black dark:border-gray-500'>Grid</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'>Overlapping elements</td>
          <td className='border border-black dark:border-gray-500'>Positioning</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'>Text in multiple columns</td>
          <td className='border border-black dark:border-gray-500'>CSS Columns</td>
        </tr>
      </table>
      
    </div>
  )
}

