package main

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

const (
	distPath    = "ui/dist"
	indexPath   = distPath + "/index.html"
	logoPath    = "ui/public/logo.png"
	faviconPath = distPath + "/favicon.ico"
)

func fileHandler(filePath string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, filePath)
	}
}

func respond(w http.ResponseWriter, data interface{}) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(data)
}

type Server struct {
	Router *mux.Router
	Port   string
}

func CreateServer() (Server, error) {
	s := Server{
		Port: ":8003",
	}

	// initiate router
	s.registerRoutes()

	return s, nil
}

func (s *Server) registerRoutes() {
	s.Router = mux.NewRouter()

	// for uptime checker
	s.Router.HandleFunc("/status", func(w http.ResponseWriter, r *http.Request) {
		payload := struct {
			Status string `json:"status"`
		}{
			Status: "ok",
		}
		respond(w, payload)
	})

	// routes for serving ui
	s.Router.PathPrefix("/static").Handler(http.FileServer(http.Dir(distPath)))
	s.Router.PathPrefix("/images").Handler(http.FileServer(http.Dir(distPath)))
	s.Router.HandleFunc("/logo.png", fileHandler(logoPath))
	s.Router.HandleFunc("/favicon.ico", fileHandler(faviconPath))
	s.Router.PathPrefix("/").HandlerFunc(fileHandler(indexPath))
}

func (s Server) ListenAndServe() error {
	srv := http.Server{
		Addr:         s.Port,
		Handler:      s.Router,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 5 * time.Second,
		IdleTimeout:  120 * time.Second,
	}

	return srv.ListenAndServe()
}
