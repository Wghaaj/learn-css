
import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Filters</h1>
      <p>Filters <span className="bold">alter the appearance</span> of images, backgrounds, and elements.</p>

      <hr className="mt-5 mb-5" />

      <p className="text-lg">Common Filter Effects</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          img &#123; <br />
          &ensp; filter: blur(5px); <br />
          &#125;
        </code>
      </pre>
      <p className='pb-5'>Makes the image <span className="bold">blurry</span>.</p>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Filter</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Example</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">blur(px)</code></td>
          <td className='border border-black dark:border-gray-500'> <code className="code dark:bg-gray-800 p-2">blur(5px)</code> </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">brightness(%)</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">brightness(150%)</code></td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">contrast(%)</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">contrast(200%)</code></td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">grayscale(%)</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">grayscale(100%)</code></td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">sepia(%)</code></td>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">	sepia(80%)</code></td>
        </tr>
      </table>

      <p className="text-lg pb-2">Example: Hover Filter Effect</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          img:hover  &#123; <br />
          &ensp; filter: grayscale(100%); <br />
          &#125;
        </code>
      </pre>
      <p> Turns the image <span className="bold">black and white</span> when hovered.</p>
    </div>
  )
}

