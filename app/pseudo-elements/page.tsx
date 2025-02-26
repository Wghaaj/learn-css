
import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Pseudo-elements</h1>
      <p className="pb-2">Pseudo-elements <span className="bold">style specific parts of an element</span> without needing extra HTML.</p>
      <p>✅ Pseudo-elements use <code className="code dark:bg-gray-800 p-2">::</code> (double colons).</p>

      <hr className="mt-5 mb-5" />

      <p className="text-lg">Common Pseudo-Elements</p>
      <ol className="ml-5 mt-5">
        <li><code className="code dark:bg-gray-800 p-2">::before</code><span className="bold"> (Add Content Before an Element)</span></li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            h1::before &#123; <br />
            &ensp;  content: &quot;🔥&quot;; <br />
            &ensp;  color: red; <br />
            &#125;
          </code>
        </pre>
        <li><code className="code dark:bg-gray-800 p-2">::after</code><span className="bold"> (Add Content After an Element)</span></li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            h1::after &#123; <br />
            &ensp;  content: &quot;🎉&quot;; <br />
            &ensp;  color: blue; <br />
            &#125;
          </code>
        </pre>
        <li><code className="code dark:bg-gray-800 p-2">::first-letter</code><span className="bold"> (Style First Letter)</span></li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            p::first-letter &#123; <br />
            &ensp;  font-size: 2em; <br />
            &ensp;  color: red; <br />
            &#125;
          </code>
        </pre>
        <li><code className="code dark:bg-gray-800 p-2">::first-liner</code><span className="bold"> (Style First Line of Text)</span></li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            p::first-line &#123; <br />
            &ensp;  font-weight: bold; <br />
            &#125;
          </code>
        </pre>
      </ol>

      <hr className="mt-5 mb-5" />

      <p className="text-lg pb-5">Example: Styling List Items with <code className="code dark:bg-gray-800 p-2">::before</code></p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            li::before &#123; <br />
            &ensp;content: &quot;✔&quot;; <br />
            &ensp;color: green; <br />
            &#125;
          </code>
       </pre>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            &lt;ul&gt; <br />
            &ensp; &lt;li&gt; Task 1 &lt;/li&gt; <br />
            &ensp; &lt;li&gt; Task 2 &lt;/li&gt; <br />
            &lt;/ul&gt;
          </code>
       </pre>

       <p className='pb-5'>Adds a checkmark before each item.</p>
       <iframe height="300" scrolling="no" title="pseudo-elements" src="https://codepen.io/Wghaaj/embed/JojRmmW?default-tab=html%2Cresult&editable=true" loading="lazy">
          See the Pen <a href="https://codepen.io/Wghaaj/pen/JojRmmW">
          pseudo-elements</a> by Diana Kravchuk (<a href="https://codepen.io/Wghaaj">@Wghaaj</a>)
          on <a href="https://codepen.io">CodePen</a>.
      </iframe>

    </div>
  )
}

