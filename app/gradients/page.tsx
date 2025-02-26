
import '../css/welcome.css';
import '../css/table.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Gradients</h1>
      <p className='pb-2'>Gradients create <span className="bold">smooth transitions</span> between colors.</p>
      <p>✅ CSS supports:</p>
         <li className='bold'>Linear Gradients</li>
         <li className='bold'>Radial Gradients</li>

      <hr className="mt-5" />

      <ol className="ml-5 mt-5">
        <li className='bold'>Linear Gradient</li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            div &#123; <br />
            &ensp;background: linear-gradient(to right, red, blue); <br />
            &#125;
          </code>
        </pre>
        <p>Creates a <span className="bold">left-to-right gradient</span> from <span className="bold">red to blue</span>.</p>
        <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Value</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Effect</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">to right	</code></td>
          <td className='border border-black dark:border-gray-500'>	Left → Right </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">to left</code></td>
          <td className='border border-black dark:border-gray-500'>Right → Left</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">to top</code></td>
          <td className='border border-black dark:border-gray-500'>Bottom → Top</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">to bottom</code></td>
          <td className='border border-black dark:border-gray-500'>	Top → Bottom </td>
        </tr>
      </table>
      <li className="bold">Radial Gradient</li>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            div &#123; <br />
            &ensp; background: radial-gradient(circle, red, blue); <br />
            &#125;
          </code>
        </pre>
        <p>Creates a <span className="bold">circular gradient</span> from <span className="bold">red to blue</span>.</p>
      <li className="bold mt-5"> Diagonal Gradient</li>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            div &#123; <br />
            &ensp;  background: linear-gradient(45deg, red, yellow); <br />
            &#125;
          </code>
        </pre>
        <p>Creates a <span className="bold">45-degree diagonal gradient</span>.</p>
      </ol>   

      <hr className="mt-5 mb-5" />

      <p className="text-lg">Example: Fancy Button with Gradient</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            button &#123; <br />
            &ensp; background: linear-gradient(to right, blue, purple); <br />
            &ensp; color: white; <br />
            &ensp; border: none; <br />
            &#125;
          </code>
       </pre>
        <iframe height="300"  scrolling="no" title="gradient-button" src="https://codepen.io/Wghaaj/embed/ByaLGra?default-tab=html%2Cresult&editable=true" loading="lazy">
          See the Pen <a href="https://codepen.io/Wghaaj/pen/ByaLGra">
          gradient-button</a> by Diana Kravchuk (<a href="https://codepen.io/Wghaaj">@Wghaaj</a>)
          on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  )
}

