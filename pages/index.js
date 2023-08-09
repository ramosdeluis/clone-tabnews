function Home() {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Centered Message</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* Reset some default browser styles */\n        body,\n        html {\n            margin: 0;\n            padding: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        /* Create a gradient background for a textured look */\n        body {\n            background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);\n            display: flex;\n            justify-content: center;\n            /* Center content horizontally */\n            align-items: center;\n            /* Center content vertically */\n            font-family: Arial, sans-serif;\n        }\n\n        .message {\n            font-size: 24px;\n            padding: 20px;\n            border-radius: 10px;\n            background-color: rgba(255, 255, 255, 0.7);\n            /* Semi-transparent white background for the message */\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n            /* Slight shadow for a lifted look */\n        }\n    "
    }}
  />
  <div className="message">❤️❤️ Amorrr, eu te amo maisss. Se você me ama, depois me da um beijinho. hihihi S2 ❤️❤️</div>
</>

    )
}
export default Home
