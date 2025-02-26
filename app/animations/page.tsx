
import '../css/welcome.css';
import '../css/table.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Animations</h1>
      <p className="pb-2">CSS animations allow elements to change over time using keyframes.</p>
      <p className='pb-2'>✅ Use <code className="code dark:bg-gray-800 p-2"> @keyframes</code> to define the animation.</p>
      <p>✅ Use <code className="code dark:bg-gray-800 p-2">animation</code> to apply it.</p>

      <hr className="mt-5 mb-5" />

      <p className="text-lg">Basic Animation Example</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          @keyframes move &#123; <br />
          &ensp; from &#123; transform: translateX(0); &#125; <br />
          &ensp; to &#123; transform: translateX(100px); &#125; <br />
          &#125;
          <br />
          <br />
          div &#123; <br />
          &ensp; animation: move 2s infinite alternate; <br />
          &#125;
        </code>
      </pre>
      <p> Moves the <code className="code dark:bg-gray-800 p-2">&lt;div&gt;</code> back and forth horizontally.</p>

      <p className="text-lg pt-5">Animation Properties</p>
      <table className='mt-5 mb-5'>
        <tr>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Property</th>
          <th className='border border-black dark:border-gray-500 bg-gray-300 dark:bg-gray-800'>Description</th>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">animation-name		</code></td>
          <td className='border border-black dark:border-gray-500'>	Name of the <code className="code dark:bg-gray-800 p-2">@keyframes</code> </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">animation-duration</code></td>
          <td className='border border-black dark:border-gray-500'>How long the animation lasts</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">animation-timing-function</code></td>
          <td className='border border-black dark:border-gray-500'>Speed of animation <code className="code dark:bg-gray-800 p-2">ease</code>, <code className="code dark:bg-gray-800 p-2">linear</code>, <code className="code dark:bg-gray-800 p-2">ease-in-out</code></td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">animation-delay</code></td>
          <td className='border border-black dark:border-gray-500'>Delay before the animation starts </td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">animation-iteration-count</code></td>
          <td className='border border-black dark:border-gray-500'>	How many times it repeats ( <code className="code dark:bg-gray-800 p-2">infinite</code> for endless loop )</td>
        </tr>
        <tr>
          <td className='border border-black dark:border-gray-500'><code className="code dark:bg-gray-800 p-2">animation-direction</code></td>
          <td className='border border-black dark:border-gray-500'>	<code className="code dark:bg-gray-800 p-2">normal</code>, <code className="code dark:bg-gray-800 p-2">reverse</code>, <code className="code dark:bg-gray-800 p-2">alternate</code> </td>
        </tr>
      </table>

      <hr className="mt-5 mb-5" />
      <p className="text-lg">Example: Button Hover Animation</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          @keyframes scaleUp &#123; <br />
          &ensp; 0% &#123; transform: scale(1); &#125; <br />
          &ensp; 100% &#123; ransform: scale(1.2); &#125; <br />
          &#125;
          <br />
          <br />
          button:hover &#123; <br />
          &ensp; animation: scaleUp 0.3s ease-in-out; <br />
          &#125;
        </code>
      </pre>
      <p className='pb-5'>The button <span className="bold">zooms in when hovered.</span></p>
      <iframe height="300" scrolling="no" title="animations" src="https://codepen.io/Wghaaj/embed/azbmQRG?default-tab=html%2Cresult&editable=true" loading="lazy">
        See the Pen <a href="https://codepen.io/Wghaaj/pen/azbmQRG">
        animations</a> by Diana Kravchuk (<a href="https://codepen.io/Wghaaj">@Wghaaj</a>)
        on <a href="https://codepen.io">CodePen</a>.
    </iframe>
    </div>
  )
}

