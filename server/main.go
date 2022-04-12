package main

import (
	"log"
)

func main() {
	s, err := CreateServer()
	if err != nil {
		log.Fatal(err)
	}

	log.Fatal(s.ListenAndServe())
}
