class NotesController < ApplicationController
  respond_to :json

  before_action :set_note, only: [:update, :destroy]

  def index
    respond_to do |format|
      format.html
      format.json { render json: Note.all }
    end
  end

  def create
    respond_with Note.create(note_params)
  end

  def update
    respond_with @note.update(note_params)
  end

  def destroy
    respond_with @note.destroy
  end

  private
    def set_note
      @note = Note.find(params[:id])
    end

    def note_params
      params.require(:note).permit(:content)
    end
end
