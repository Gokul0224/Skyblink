    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`SKYBLINK Backend running on port ${PORT}`);
});
</CodeBlock>

## 4. package.json

<CodeBlock language="json" editable>
{
  "name": "skyblink-backend",
  "version": "1.0.0",
  "description": "SKYBLINK Space Technology Backend",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^5.1.0",
    "cors": "^2.8.5"
  }
}
</CodeBlock>

## 5. Install commands

```bash
cd backend
npm install
npm start
