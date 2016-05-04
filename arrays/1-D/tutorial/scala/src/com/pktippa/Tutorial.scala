package com.pktippa

import java.io._;

object Tutorial {
  def main(args: Array[String]) {
    val br = new BufferedReader(new InputStreamReader(System.in));
    val pw = new PrintWriter(new BufferedOutputStream(System.out));
    // Read size of array from STDIN
    val n 	= br.readLine().toInt;
    // Declare empty array a
    val a = new Array[Int](n);
    for(i <- 0 until n) {
      // Initialize array a by reading input from STDIN
      a(i) = br.readLine().toInt;
    }
    
    // Write your code here
    // Printing array in reverse order
    // Using decrement
    for(j <- a.length-1 to 0 by -1){
      println(a(j))
    }
    // Flushing printwriter
    
    pw.flush();
    
   }
}