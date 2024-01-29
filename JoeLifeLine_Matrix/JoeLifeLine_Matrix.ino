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
    B10010101,
    B10100001,
    B10100001,
    B10010101,
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
    B00011100,
    B00111110,
    B01111100,
    B01111100,
    B00111110,
    B00011100,
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
    B00000100,
    B00000110,
    B11111110,
    B00110000,
    B00111000,
    B00111000,
    B11110000,
    B00000000

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
