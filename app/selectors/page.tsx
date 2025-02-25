
import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Selectors</h1>
      <p className="pb-2">CSS <span className="bold">selectors</span> allow you to <span className="bold">target HTML elements</span> and apply styles to them. Different selectors help you style <span className="bold">specific elements, groups of elements, or elements with certain attributes.</span></p>

      <p className="text-xl pb-5 pt-5">Types of Selectors</p>
      <ol className='ml-5'>
        <li className='bold'>Basic Selectors</li>
        <p className="pb-2 pt-2">✅ Element Selector &mdash; Targets all elements of a type </p>
        <pre className="code dark:bg-gray-800 mb-5">
          <code>
              p &#123; <br></br>
              &ensp; color:blue;  <span className="text-gray-400"><i>/ * All &lt;p&gt; elements will be blue * / </i></span><br></br>
              &#125;
          </code>
        </pre>
        <p className="pb-2 pt-2">✅ Class Selector &mdash; Targets elements with a specific class </p>
        <pre className="code dark:bg-gray-800 mb-5">
          <code>
              .box &#123; <br></br>
              &ensp; width: 200px; <br></br>
              &ensp; height: 100px; <br></br>
              &#125;
          </code>
        </pre>
        <pre className="code dark:bg-gray-800">
          <code>
            &lt;div class=&quot;box&quot;&gt;&lt;/div&gt; <span className="text-gray-400"><i>&lt;!-- This div will have the styles --&gt;</i></span>
          </code>
        </pre>
        <p className="pb-2 pt-2">✅ ID Selector &mdash; Targets a specific element with an ID </p>
        <pre className="code dark:bg-gray-800 mb-5">
          <code>
              #unique &#123; <br></br>
              &ensp; width: 200px; <br></br>
              &ensp; height: 100px; <br></br>
              &#125;
          </code>
        </pre>
        <pre className="code dark:bg-gray-800">
          <code>
            &lt;p id=&quot;unique&quot;&gt; This text is unique. &lt;/p&gt;
          </code>
        </pre>
        <p className="pb-2 pt-2">✅ Universal Selector <code className="code dark:bg-gray-800 p-2">(*)</code> &mdash; Selects <span className="bold">all</span> elements </p>
        <pre className="code dark:bg-gray-800 mb-5">
          <code>
              * &#123; <br></br>
              &ensp; magrin: 0; <br></br>
              &ensp; padding: 0; <br></br>
              &#125;
          </code>
        </pre>
        <li className="bold">Grouping and Combining Selectors</li>
        <p className="pb-2 pt-2">✅ Group Selector <code className="code dark:bg-gray-800 p-2">(,)</code> &mdash; Styles multiple elements at once </p>
        <pre className="code dark:bg-gray-800 mb-5">
          <code>
              h1, h2, p &#123; <br></br>
              &ensp; font-family: Arial, sans-serif; <br></br>
              &#125;
          </code>
        </pre>
        <p className="pb-2 pt-2">✅ Descendant Selector <code className="code dark:bg-gray-800 p-2">( )</code> &mdash; Targets nested elements </p>
        <pre className="code dark:bg-gray-800 mb-5">
          <code>
              article p &#123; <br></br>
              &ensp; color: gray; <br></br>
              &#125;
          </code>
        </pre>
        <pre className="code dark:bg-gray-800 mb-5">
          <code>
              &lt;article&gt; <br></br>
              &ensp; &lt;p&gt; This paragraph inside the article will be gray. &lt;/p&gt;
          </code>
        </pre>
        <p className="pb-2 pt-2">✅ Child Selector <code className="code dark:bg-gray-800 p-2">( &gt; )</code> &mdash; Targets <span className="bold">direct</span> children </p>
        <pre className="code dark:bg-gray-800 mb-5">
          <code>
              nav &gt; ul &#123; <br></br>
              &ensp; list-style: none; <br></br>
              &#125;
          </code>
        </pre>
        <p className="pb-2 pt-2">✅ Adjacent Sibling Selector <code className="code dark:bg-gray-800 p-2">( + )</code> &mdash; Targets the next immediate sibling </p>
        <pre className="code dark:bg-gray-800 mb-5">
          <code>
              h1 + p &#123; <br></br>
              &ensp; font-style: italic; <br></br>
              &#125;
          </code>
        </pre>
        <p className="pb-2 pt-2">✅ General Sibling Selector <code className="code dark:bg-gray-800 p-2">( ~ )</code> &mdash; Targets all siblings </p>
        <pre className="code dark:bg-gray-800 mb-5">
          <code>
              h1 ~ p &#123; <br></br>
              &ensp; font-style: italic; <br></br>
              &#125;
          </code>
        </pre>
        <p className="pb-2 pt-2">✅ Attribute Selectors </p>
        <pre className="code dark:bg-gray-800 mb-5">
          <code>
              input[type=&quot;text&quot;] &#123; <br></br>
              &ensp; border: 1px solid black; <br></br>
              &#125;
          </code>
        </pre>
        <p className="pb-2 pt-2">✅ Pseudo-Class & Pseudo-Element Selectors (More later) </p>
        <pre className="code dark:bg-gray-800 mb-5">
          <code>
              a:hover &#123; <br></br>
              &ensp; color: red; <br></br>
              &#125;
          </code>
        </pre>
      </ol>          
      
    </div>
  )
}

