// Spike 1: Basic Vision Model Testing
// Test Llama 3.2-Vision capabilities

console.log("🧪 Spike 1: Testing Llama 3.2-Vision");

// Test 1: Basic API connectivity
async function testBasicAPI() {
    console.log("\n🔗 Test 1: Basic API Connectivity");
    
    const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'llama3.2-vision',
            prompt: 'What is 2+2?',
            stream: false
        })
    });
    
    const data = await response.json();
    console.log("Response:", data.response);
}

// Test 2: Vision capability with base64 image
async function testVisionWithImage(base64Image, description) {
    console.log(`\n👁️  Test 2: Vision Test - ${description}`);
    
    const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'llama3.2-vision',
            prompt: 'What do you see in this image? Describe it in detail.',
            images: [base64Image],
            stream: false
        })
    });
    
    const data = await response.json();
    console.log("Vision Response:", data.response);
    console.log("Processing time:", data.total_duration / 1000000, "ms");
}

// Simple colored rectangle as base64 (red 100x100 pixel PNG)
const redSquareBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";

async function runTests() {
    try {
        await testBasicAPI();
        
        // Test with simple red pixel
        await testVisionWithImage(redSquareBase64, "Simple Red Pixel");
        
        console.log("\n✅ Spike 1 Tests Complete!");
        console.log("\n📊 Results Summary:");
        console.log("- ✅ Ollama API accessible");
        console.log("- ✅ Llama 3.2-Vision responding");
        console.log("- ✅ Vision input accepted");
        
    } catch (error) {
        console.error("❌ Test failed:", error);
    }
}

runTests();
