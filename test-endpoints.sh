#!/bin/bash

# Test script for portfolio frontend and backend
# Run this after starting the dev server: npm run dev

BASE_URL="http://localhost:3000"

echo "🧪 Testing Portfolio Frontend & Backend"
echo "========================================"
echo ""

# Test 1: Check if server is running
echo "1️⃣  Checking if server is running..."
if curl -s -o /dev/null -w "%{http_code}" "$BASE_URL" | grep -q "200"; then
    echo "   ✅ Server is running"
else
    echo "   ❌ Server is not running. Please run: npm run dev"
    exit 1
fi
echo ""

# Test 2: Test /connect page
echo "2️⃣  Testing /connect page..."
CONNECT_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/connect")
if [ "$CONNECT_STATUS" = "200" ]; then
    echo "   ✅ /connect page loads successfully"
else
    echo "   ❌ /connect page failed (Status: $CONNECT_STATUS)"
fi
echo ""

# Test 3: Test contact API
echo "3️⃣  Testing /api/contact endpoint..."
CONTACT_RESPONSE=$(curl -s -X POST "$BASE_URL/api/contact" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","subject":"Test","message":"This is a test message"}')

if echo "$CONTACT_RESPONSE" | grep -q "Email sent successfully"; then
    echo "   ✅ Contact API works correctly"
else
    echo "   ⚠️  Contact API response: $CONTACT_RESPONSE"
fi
echo ""

# Test 4: Test chat API (will fail without API key, but should return proper error)
echo "4️⃣  Testing /api/chat endpoint..."
CHAT_RESPONSE=$(curl -s -X POST "$BASE_URL/api/chat" \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello"}')

if echo "$CHAT_RESPONSE" | grep -q "error"; then
    echo "   ⚠️  Chat API returned error (expected if GOOGLE_API_KEY not set)"
    echo "      Response: $CHAT_RESPONSE"
else
    echo "   ✅ Chat API works correctly"
fi
echo ""

# Test 5: Test voice API
echo "5️⃣  Testing /api/process-voice endpoint..."
# Create a dummy audio file for testing
echo "dummy audio data" > /tmp/test_audio.txt
VOICE_RESPONSE=$(curl -s -X POST "$BASE_URL/api/process-voice" \
  -F "audio=@/tmp/test_audio.txt")

if echo "$VOICE_RESPONSE" | grep -q "transcript"; then
    echo "   ✅ Voice API works correctly"
else
    echo "   ⚠️  Voice API response: $VOICE_RESPONSE"
fi
rm -f /tmp/test_audio.txt
echo ""

echo "========================================"
echo "✅ Testing complete!"
echo ""
echo "📝 Manual checks to do:"
echo "   1. Visit http://localhost:3000/connect in browser"
echo "   2. Verify white background and black text"
echo "   3. Click all three buttons (LinkedIn, GitHub, Portfolio)"
echo "   4. Check mobile responsiveness by resizing browser"
echo ""

