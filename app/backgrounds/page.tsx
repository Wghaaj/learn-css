import '../css/welcome.css';
export default function Page() {
  return (
    <div className="max-w-screen-lg p-10 main">
      <h1 className="title pb-5">Backgrounds</h1>
      <p className="text-lg">Basic Background Properties</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          div &#123; <br />
          &ensp; background-color: lightblue; <br />
          &#125;
        </code>
      </pre>
      <p className='bold'>✅ Example: Background Image</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          div &#123; <br />
          &ensp; background-image: url(&quot;image.jpg&quot;); <br />
          &#125;
        </code>
      </pre>
      <p className='bold'>✅ Example: No Repeating Background</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          div &#123; <br />
          &ensp; background-repeat: no-repeat; <br />
          &#125;
        </code>
      </pre>
      <p className='bold'>✅ Example: Background Cover</p>
      <pre className="code dark:bg-gray-800 mt-5 mb-5">
        <code>
          div &#123; <br />
          &ensp; background-size: cover; <br />
          &#125;
        </code>
      </pre>
      <p>Ensures the background <span className="bold">fills the entire element</span>.</p>
    </div>
  )
}

