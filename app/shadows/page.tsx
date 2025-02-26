import '../css/welcome.css';
import '../css/table.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Shadows</h1>
      <p className='pb-2'>CSS provides two types of shadows:</p>
      <li><code className="code dark:bg-gray-800 p-2">box-shadow</code> (for elements)</li>
      <li className='pt-2'><code className="code dark:bg-gray-800 p-2">text-shadow</code> (for text)</li>
       <hr className="mt-5 mb-5" />
       <ol className="ml-5">
        <li><span className="bold">Box Shadow</span>( <code className="code dark:bg-gray-800 p-2">box-shadow</code> )</li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            div &#123; <br />
            &ensp; box-shadow: 4px 4px 10px gray; <br />
            &#125;
          </code>
        </pre>
        <p> Adds a <span className="bold">gray shadow</span> around the box.</p>
        <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Property</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Description</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">X-offset</code></td>
          <td className='border border-black dark:border-gray-500'>Horizontal shadow (positive = right, negative = left) </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">Y-offset	</code></td>
          <td className='border border-black dark:border-gray-500'>Vertical shadow (positive = down, negative = up) </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">Blur</code></td>
          <td className='border border-black dark:border-gray-500'>Higher values = softer shadow </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">Color</code></td>
          <td className='border border-black dark:border-gray-500'>Shadow color </td>
        </tr>
      </table>
      <li><span className="bold">Text Shadow</span>( <code className="code dark:bg-gray-800 p-2">text-shadow</code> )</li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            h1 &#123; <br />
            &ensp; text-shadow: 2px 2px 5px gray; <br />
            &#125;
          </code>
        </pre>
        <p> Adds a <span className="bold">shadow behind the text.</span> </p>
       </ol>

       <p className="text-lg pt-5">Example: Glow Effect</p>
       <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            h1 &#123; <br />
            &ensp;  text-shadow: 0 0 10px red; <br />
            &#125;
          </code>
        </pre>
      <p className='pb-5'>Creates a <span className="bold">red glow </span>around the text.</p>
      <iframe height="300" scrolling="no" title="red-glow" src="https://codepen.io/Wghaaj/embed/MYWjzpb?default-tab=html%2Cresult&editable=true" loading="lazy">
        See the Pen <a href="https://codepen.io/Wghaaj/pen/MYWjzpb">
        red-glow</a> by Diana Kravchuk (<a href="https://codepen.io/Wghaaj">@Wghaaj</a>)
        on <a href="https://codepen.io">CodePen</a>.
    </iframe>
    </div>
  )
}

