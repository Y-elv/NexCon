"use client";
import { useState } from "react";

export default function GrammarInput() {
  const [input, setInput] = useState("");
  const [corrections, setCorrections] = useState<any[]>([]);

  async function checkGrammar(text: string) {
    const res = await fetch("http://localhost:8010/v2/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, language: "en-US" }),
    });
    const data = await res.json();
    setCorrections(data.matches || []);
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Grammar Checker</h3>
      <textarea
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          checkGrammar(e.target.value);
        }}
        rows={5}
        cols={50}
        placeholder="Type your text to check grammar..."
        style={{ width: "100%", padding: "0.5rem" }}
      />
      <ul style={{ marginTop: "1rem" }}>
        {corrections.map((item, i) => (
          <li key={i}>
            {item.message}{" "}
            {item.replacements?.length > 0 && (
              <>
                Suggestion: <b>{item.replacements[0].value}</b>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
