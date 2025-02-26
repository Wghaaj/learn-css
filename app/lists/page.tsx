import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Lists</h1>
      <p className='pb-5'>Lists ( <code className="code dark:bg-gray-800 p-2">&lt;ul&gt;</code>, <code className="code dark:bg-gray-800 p-2">&lt;ol&gt;</code>, <code className="code dark:bg-gray-800 p-2">&lt;li&gt;</code> ) can be customized using <code className="code dark:bg-gray-800 p-2">list-style</code>.</p>

      <p className="bold">✅ Example: Removing Bullet Points</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          ul &#123; <br />
          &ensp; list-style: none; <br />
          &#125;
        </code>
      </pre>
      <p className="bold">✅ Example: Custom Bullet Points</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          ul &#123; <br />
          &ensp; list-style: square; <br />
          &#125;
        </code>
      </pre>
      <p className="bold">✅ Example: Custom Image as Bullet Point</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          ul &#123; <br />
          &ensp; list-style: url(&quot;bullet.png&quot;); <br />
          &#125;
        </code>
      </pre>

      <p className="text-lg">Example: Changing Numbered List Style</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          ol &#123; <br />
          &ensp; list-style: upper-roman; <br />
          &#125;
        </code>
      </pre>

      <p>Numbers will be <span className="bold">I, II, III, IV...</span> instead of <span className="bold">1, 2, 3, 4....</span></p>

    </div>
  )
}

