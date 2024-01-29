#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_LEDBackpack.h>

Adafruit_8x8matrix matrix = Adafruit_8x8matrix();

int Moisture_signal = A0;

void setup(){
  Serial.begin(9600);
  matrix.begin(0x70);    
  matrix.clear();        
}

void loop() {
  int Moisture = analogRead(Moisture_signal);
  Serial.print("Soil Moisture Level: ");
  Serial.println(Moisture);
  delay(200);

  if (Moisture > 700){
    displayCamel();
  }
  else if (Moisture < 500){
    displayHeart();
  }
  else{
    displaySmiley();
  }
}

void displaySmiley() {
  uint8_t smileBitmap[] = {
    B00111100,
    B01000010,
    B10100101,
    B10000001,
    B10100101,
    B10011001,
    B01000010,
    B00111100
  };

  matrix.clear(); // Clear the display
  for (int8_t y = 0; y < 8; y++) {
    for (int8_t x = 0; x < 8; x++) {
      if (bitRead(smileBitmap[y], x)) {
        matrix.drawPixel(x, y, LED_ON); // Turn on the pixel
      }
    }
  }
  matrix.writeDisplay(); // Update the display
}

void displayHeart(){
  uint8_t heartBitmap[] = {
    B00000000,
    B00100100,
    B01111110,
    B01111110,
    B01111110,
    B00111100,
    B00011000,
    B00000000
  };
  matrix.clear(); // Clear the display
  for (int8_t y = 0; y < 8; y++) {
    for (int8_t x = 0; x < 8; x++) {
      if (bitRead(heartBitmap[y], x)) {
        matrix.drawPixel(x, y, LED_ON); // Turn on the pixel
      }
    }
  }
  matrix.writeDisplay(); // Update the display
}

void displayCamel(){
  uint8_t camelBitmap[] = {
    B00000000,
    B01100000,
    B11100000,
    B00101100,
    B00111110,
    B00111110,
    B00100010,
    B00100010,
  };
  matrix.clear(); // Clear the display
  for (int8_t y = 0; y < 8; y++) {
    for (int8_t x = 0; x < 8; x++) {
      if (bitRead(camelBitmap[y], x)) {
        matrix.drawPixel(x, y, LED_ON); // Turn on the pixel
      }
    }
  }
  matrix.writeDisplay(); // Update the display
}
