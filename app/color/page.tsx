import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Color</h1>
      <p className="text-lg pb-2">How to Define Colors in CSS</p>
      <p className='pb-2'>You can specify colors in CSS using:</p>
      <p className="pb-2">✅<span className="bold"> Named Colors </span> → <code className="code dark:bg-gray-800 p-2">red</code>, <code className="code dark:bg-gray-800 p-2">blue</code>, <code className="code dark:bg-gray-800 p-2">green</code></p>
      <p className="pb-2">✅<span className="bold"> Hex Codes </span> → <code className="code dark:bg-gray-800 p-2">#ff000</code> (red), <code className="code dark:bg-gray-800 p-2">#00ff00</code> (green) </p>
      <p className="pb-2">✅<span className="bold"> RGB Values </span> → <code className="code dark:bg-gray-800 p-2">rgb(255, 0, 0)</code> (red) </p>
      <p className="pb-2">✅<span className="bold"> RGBA (with transparency) </span> → <code className="code dark:bg-gray-800 p-2">rgba(255, 0, 0, 0.5)</code></p>
      <p className="pb-2">✅<span className="bold"> HSL (Hue, Saturation, Lightness) </span> → <code className="code dark:bg-gray-800 p-2">hsl(0, 100%, 50%)</code></p>
      <p className="pb-2">✅<span className="bold"> HSLA (with transparency) </span> → <code className="code dark:bg-gray-800 p-2">hsla(0, 100%, 50%, 0.5)</code></p>

      <hr className="mt-5 mb-5" />
      <p className="text-lg pb-2">Examples of Color Usage</p>
      <p className="bold">✅ Setting Text Color</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          h1 &#123; <br />
          &ensp; color: blue; <br />
          &#125;
        </code>
      </pre>
      <p className="bold">✅ Setting Background Color</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          div &#123; <br />
          &ensp; background-color: #f4f4f4; <br />
          &#125;
        </code>
      </pre>
      <p className="bold">✅ Using RGBA for Transparency</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .overlay &#123; <br />
          &ensp; background-color: rgba(0, 0, 0, 0.5); <br />
          &#125;
        </code>
      </pre>
      <p className="bold">✅ Using HSL for Adjustability</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          .button &#123; <br />
          &ensp; background-color: hsl(200, 50%, 40%); <br />
          &#125;
        </code>
      </pre>
    </div>
  )
}

