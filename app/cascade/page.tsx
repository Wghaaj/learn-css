import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">The Cascade</h1>
      <p className="pt-5 pb-5">The <span className="bold">CSS cascade</span> determines which styles take effect when <span className="bold">multiple rules</span> apply to the same element.</p>
      <p className="pb-2">💡 The Cascade follows these principles:</p>
      <ol className='ml-5'>
        <li><span className="bold">Source Order </span>&mdash; Later styles <span className="bold">override</span> earlier ones</li>
        <li><span className="bold">Specificity </span>&mdash; More specific selectors take <span className="bold">priority</span></li>
        <li><span className="bold">Importance </span> <code className="code dark:bg-gray-800 p-2">(!important)</code> &mdash; Overrides everything else</li>
      </ol>
      <hr className="mt-5 mb-5" />
      <p className="text-lg pb-5">How the Cascade Works</p>
      <ol className="ml-5">
        <li className="bold">Source Order Matters</li>
        <p>If two rules target the same element, the one <span className="bold">written last</span> wins.</p>
        <pre className="code dark:bg-gray-800 mb-5 mt-5">
          <code>
            p &#123; <br></br>
            &ensp; color: blue; <br></br>
            &#125;
            <br></br>
            p &#123; <br></br>
            &ensp; color: red; <span className="text-gray-400"><i>/ * This wins because it is later * / </i></span> <br></br>
            &#125;
          </code>
        </pre>
        <li className="bold">More Specific Selectors Override Less Specific Ones</li>
      <pre className="code dark:bg-gray-800 mb-5 mt-5">
          <code>
            p &#123; <br></br>
            &ensp; color: blue; <br></br>
            &#125;
            <br></br>
            p.special &#123; <br></br>
            &ensp; color: red; <span className="text-gray-400"><i>/ * This wins because the class is more specific * / </i></span> <br></br>
            &#125;
          </code>
        </pre>
        <pre className="code dark:bg-gray-800 mb-5 mt-5">
          <code>
            &lt;p class=&quot;special&quot;&gt;This will be red.&lt;/p&gt;
          </code>
        </pre>
        <li className="bold"><code className="code dark:bg-gray-800 p-2">!important</code> Overrides Everything</li>
        <pre className="code dark:bg-gray-800 mb-5 mt-5">
          <code>
            p &#123; <br></br>
            &ensp; color: blue !important;<br></br>
            &#125;
            <br></br>
            p &#123; <br></br>
            &ensp; color: red; <span className="text-gray-400"><i>/ * Ignored because `! important` was used earlier * / </i></span> <br></br>
            &#125;
          </code>
        </pre>
        <p>✅ <span className="bold">Best Practice:</span> Avoid using <code className="code dark:bg-gray-800 p-2">!important</code> unless necessary.</p>
      </ol>
      
      
    </div>
  )
}

