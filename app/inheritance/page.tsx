import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Inheritance</h1>
      <p className="pb-2">Inheritance allows <span className="bold">some CSS properties</span> to be automatically <span className="bold">passed down</span> from a parent element to its child elements.</p>
      <p>💡 Not all properties are inherited. Only <span className="bold">text-related properties</span> (like <code className="code dark:bg-gray-800 p-2">color</code> and <code className="code dark:bg-gray-800 p-2">font-family</code>) are inherited by <span className="bold">default</span>, while <span className="bold">box-related properties</span> (like <code className="code dark:bg-gray-800 p-2">margin</code>, <code className="code dark:bg-gray-800 p-2">padding</code> and <code className="code dark:bg-gray-800 p-2">border</code>) are <span className="bold">not inherited.</span></p>
      
      <hr className="mt-5 mb-5" />

      <p className="text-lg pb-2">How Inheritance Works</p>
      <p className="bold">✅ Example: Inherited Properties (Text Styling)</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          div &#123; <br />
          &ensp; color: red; <br />
          &ensp; font-family: Arial; <br />
          &#125;
        </code>
      </pre>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          &lt;div&gt; <br />
          &ensp; &lt;p&gt;This text will be red and use Arial font.&lt;/p&gt; <br />
          &lt;/div&gt;
        </code>
      </pre>
      <p>The <code className="code dark:bg-gray-800 p-2">&lt;p&gt;</code> inside the <code className="code dark:bg-gray-800 p-2">&lt;div&gt;</code> inherits <code className="code dark:bg-gray-800 p-2">color: red;</code>  and <code className="code dark:bg-gray-800 p-2">font-family: Arial;</code> from its parent.</p>

      <hr className="mt-5 mb-5" />

      <div className="text-lg pb-2">How to Control Inheritance</div>
      <p className="bold">✅ Forcing Inheritance (<code className="code dark:bg-gray-800 p-2">inherit</code>) </p>
      <p>You can <span className="bold">force inheritance</span> for properties that do not inherit by default:</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          button &#123; <br />
          &ensp; color: inherit; <span className="text-gray-400"><i>/ * Button text will take the color from its parent * / </i></span>
          &#125;
        </code>
      </pre>
      <p className="bold">✅ Preventing Inheritance (<code className="code dark:bg-gray-800 p-2">initial</code>) </p>
      <p>Use <code className="code dark:bg-gray-800 p-2">initial</code> to reset a property to its default value:</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          p &#123; <br />
          &ensp; color: initial; <span className="text-gray-400"><i>/ * Resets color to browsers default (usually black) * / </i></span>
          &#125;
        </code>
      </pre>
      <p className="bold">✅ Using <code className="code dark:bg-gray-800 p-2">unset</code> to Remove Styles</p>
      <li>For <span className="bold">inheritable properties</span> → acts like <code className="code dark:bg-gray-800 p-2">inherit</code> </li>
      <li>For <span className="bold">non-inheritable properties</span> → acts like <code className="code dark:bg-gray-800 p-2">initial</code> </li>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          p &#123; <br />
          &ensp; color: unset; <br />
          &#125;
        </code>
      </pre>
    </div>
  )
}

