class ArticlesController < ApplicationController
  def index
    @articles = Article.order("id DESC")
    @article = Article.new
  end

  def new
  end

  def create
    binding.pry
    article = Article.new(article_params)
    if article.save
      redirect_to index 
    end
  end

  private
  def article_params
    params.require(:article).permit(:text)
  end
end
