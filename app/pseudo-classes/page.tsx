import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Pseudo-Classes</h1>
      <p className="pb-2">Pseudo-classes <span className="bold">select elements</span> based on their <span className="bold">state</span> or <span className="bold">position</span> in the document.</p>
      <p className="pb-5">✅ They start with <code className="code dark:bg-gray-800 p-2">:</code> (single colon).</p>

      <p className="text-lg">Common Pseudo-Classes</p>
      <ol className="ml-5 mt-5">
        <li><code className="code dark:bg-gray-800 p-2">:hover</code><span className="bold"> (When Hovered)</span></li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            button:hover &#123; <br />
            &ensp; background-color: lightblue; <br />
            &#125;
          </code>
        </pre>
        <p className="pb-2">Changes the button’s background when hovered.</p>
        <li><code className="code dark:bg-gray-800 p-2">:active</code><span className="bold"> (When Clicked)</span></li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            button:active &#123; <br />
            &ensp;background-color: red; <br />
            &#125;
          </code>
        </pre>
        <p className="pb-2">Changes color <span className="bold">when the button is clicked</span>.</p>
        <li><code className="code dark:bg-gray-800 p-2">:focus</code><span className="bold"> (When Focused)</span></li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            input:focus &#123; <br />
            &ensp; border: 2px solid blue; <br />
            &#125;
          </code>
        </pre>
        <p className="pb-2"> Changes the input field border <span className="bold"> when clicked.</span>.</p>
        <li><code className="code dark:bg-gray-800 p-2">:nth-child(n)</code><span className="bold"> (Selects Specific Children)</span></li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            li:nth-child(2) &#123; <br />
            &ensp; color: red; <br />
            &#125;
          </code>
        </pre>
        <p className="pb-2"> Selects the <span className="bold">second</span> <code className="code dark:bg-gray-800 p-2">&lt;li&gt;</code> in a list.</p>
        <li><code className="code dark:bg-gray-800 p-2">:first-child</code><span className="bold"> & </span><code className="code dark:bg-gray-800 p-2">:last-child</code></li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            p:first-child &#123; <br />
            &ensp; font-weight: bold; <br />
            &#125;
            <br />
            p:last-child &#123; <br />
            &ensp; color: blue; <br />
            &#125;
          </code>
        </pre>
        <p className="pb-2"> Styles <span className="bold">only the first or last</span> paragraph inside a container.</p>
        <li><code className="code dark:bg-gray-800 p-2">:not(selector)</code><span className="bold">(Excludes Elements)</span></li>
        <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            button:not(.primary) &#123; <br />
            &ensp; background: gray; <br />
            &#125;
          </code>
        </pre>
        <p className="pb-2"> Targets all buttons except those with the <code className="code dark:bg-gray-800 p-2">.primary</code> class.</p>
      </ol>

      <p className="text-lg pt-5">Example: Styling Links</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
          <code>
            a:link &#123; <br />
            &ensp; color: blue; <br />
            &#125; <span className="text-gray-400"><i> / * Normal link * /</i></span>
            <br />
            <br />
            a:visited &#123; <br />
            &ensp; color: purple; <br />
            &#125; <span className="text-gray-400"><i> / *Already clicked * /</i></span>
            <br />
            <br />
            a:hover &#123; <br />
            &ensp; text-decoration: underline; <br />
            &#125; <span className="text-gray-400"><i> / * When hovered * /</i></span>
            <br />
            <br />
            a:active &#123; <br />
            &ensp; color: red; <br />
            &#125; <span className="text-gray-400"><i> / * When clicked * /</i></span>
            <br />
          </code>
        </pre>
      
    </div>
  )
}

