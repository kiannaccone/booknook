class BooksController < ApplicationController

    def index
        url = "https://www.googleapis.com/books/v1/volumes?startIndex=2&q=subject:fantasy&maxResults=40&kprojection=lite&inpublisher=harpercollins&key=AIzaSyAp8A0g53pMcfRl7H1cVPPvjU-LYS0Bg6Q"
        response = RestClient.get(url)

        books = JSON.parse(response)

        render json: {book: books}
    end

end
